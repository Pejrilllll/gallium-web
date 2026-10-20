import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Orthorhombic (Cmca-like) Ga lattice — a/b/c unequal + dimer pairs. */
const A = 1.15;
const B = 1.45;
const C = 1.05;

function buildSites() {
  const sites = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        // dimer pair offset along c — hallmark of orthorhombic Ga
        sites.push({
          x: x * A * 1.35 + (y % 2) * 0.18,
          y: y * B * 1.35,
          z: z * C * 1.35 + (x % 2) * 0.14,
          dimer: -0.16,
        });
        sites.push({
          x: x * A * 1.35 + (y % 2) * 0.18 + 0.32,
          y: y * B * 1.35 + 0.12,
          z: z * C * 1.35 + (x % 2) * 0.14 + 0.28,
          dimer: 0.16,
        });
      }
    }
  }
  return sites;
}

function buildBonds(sites) {
  const bonds = [];
  const max = 1.55;
  for (let i = 0; i < sites.length; i++) {
    for (let j = i + 1; j < sites.length; j++) {
      const dx = sites[i].x - sites[j].x;
      const dy = sites[i].y - sites[j].y;
      const dz = sites[i].z - sites[j].z;
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (d < max) bonds.push([i, j]);
    }
  }
  return bonds;
}

export default function CrystalLattice({ melt = 0 }) {
  const group = useRef();
  const atoms = useRef();
  const bondsRef = useRef();

  const sites = useMemo(() => buildSites(), []);
  const bonds = useMemo(() => buildBonds(sites), [sites]);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const base = useMemo(() => sites.map((s) => new THREE.Vector3(s.x, s.y, s.z)), [sites]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.12;
      // melt: lattice swells and loses order
      const swell = 1 + melt * 0.18;
      group.current.scale.setScalar(swell);
    }

    if (atoms.current) {
      sites.forEach((s, i) => {
        const b = base[i];
        const j = melt * 0.38;
        dummy.position.set(
          b.x + Math.sin(t * 2.1 + i * 0.9) * j,
          b.y + Math.cos(t * 1.7 + i * 1.3) * j,
          b.z + Math.sin(t * 2.6 + i * 0.6) * j,
        );
        dummy.scale.setScalar(0.16 + melt * 0.05);
        dummy.updateMatrix();
        atoms.current.setMatrixAt(i, dummy.matrix);
      });
      atoms.current.instanceMatrix.needsUpdate = true;
    }
  });

  // bonds as a single line-segments buffer (rebuilt on melt via scale on group)
  const bondPositions = useMemo(() => {
    const arr = new Float32Array(bonds.length * 6);
    bonds.forEach(([i, j], k) => {
      const a = base[i];
      const b = base[j];
      arr[k * 6 + 0] = a.x;
      arr[k * 6 + 1] = a.y;
      arr[k * 6 + 2] = a.z;
      arr[k * 6 + 3] = b.x;
      arr[k * 6 + 4] = b.y;
      arr[k * 6 + 5] = b.z;
    });
    return arr;
  }, [bonds, base]);

  return (
    <group ref={group}>
      {/* unit cell wireframe */}
      <mesh>
        <boxGeometry args={[A * 4.05, B * 4.05, C * 4.05]} />
        <meshBasicMaterial color="#a1a1aa" wireframe transparent opacity={0.1} />
      </mesh>

      {/* brushed-steel atoms */}
      <instancedMesh ref={atoms} args={[null, null, sites.length]}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial
          color="#d4d4d8"
          metalness={1}
          roughness={0.28 + melt * 0.18}
          emissive="#52525b"
          emissiveIntensity={0.08 + melt * 0.28}
        />
      </instancedMesh>

      {/* bonds */}
      <lineSegments ref={bondsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={bonds.length * 2}
            array={bondPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#71717a"
          transparent
          opacity={0.4 - melt * 0.25}
        />
      </lineSegments>
    </group>
  );
}
