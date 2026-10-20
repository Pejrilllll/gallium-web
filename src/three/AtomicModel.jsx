import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Shell occupancy for Ga [Z=31]: 2, 8, 18, 3 */
const SHELLS = [
  { count: 2, radius: 1.15, speed: 1.35, tilt: [0.2, 0, 0], thickness: 0.012 },
  { count: 8, radius: 1.75, speed: 0.95, tilt: [1.1, 0.35, 0], thickness: 0.012 },
  { count: 18, radius: 2.4, speed: 0.62, tilt: [-0.55, 0.9, 0.2], thickness: 0.011 },
  { count: 3, radius: 3.05, speed: 0.42, tilt: [0.85, -0.65, 0], thickness: 0.011 },
];

function OrbitRing({ radius, tilt, thickness, melt }) {
  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, thickness, 8, 128]} />
        <meshStandardMaterial
          color="#71717a"
          metalness={1}
          roughness={0.28}
          emissive="#52525b"
          emissiveIntensity={0.08 + melt * 0.12}
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

function Electrons({ melt }) {
  const group = useRef();

  const electrons = useMemo(() => {
    const list = [];
    SHELLS.forEach((shell, si) => {
      for (let i = 0; i < shell.count; i++) {
        list.push({
          shell: si,
          phase: (i / shell.count) * Math.PI * 2 + si * 0.4,
          radius: shell.radius,
          speed: shell.speed,
          tilt: new THREE.Euler(...shell.tilt),
          size: 0.048 + (si % 2) * 0.008,
        });
      }
    });
    return list;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const mesh = useRef();

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.elapsedTime;
    const jitter = melt * 0.22;

    electrons.forEach((e, i) => {
      const wobble = melt * 0.12 * Math.sin(t * 2.2 + i * 1.7);
      const a = e.phase + t * e.speed;
      const r = e.radius + wobble;
      dummy.position.set(Math.cos(a) * r, Math.sin(a) * r, 0);
      if (jitter > 0) {
        dummy.position.x += Math.sin(t * 3.1 + i) * jitter;
        dummy.position.y += Math.cos(t * 2.7 + i * 1.3) * jitter;
        dummy.position.z += Math.sin(t * 3.6 + i * 0.7) * jitter;
      }
      dummy.position.applyEuler(e.tilt);
      dummy.scale.setScalar(e.size * (1 + melt * 0.35));
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;

    if (group.current) {
      group.current.rotation.y = t * 0.08;
    }
  });

  return (
    <group ref={group}>
      <instancedMesh ref={mesh} args={[null, null, electrons.length]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial
          color="#d4d4d8"
          emissive="#71717a"
          emissiveIntensity={0.35 + melt * 0.35}
          metalness={0.7}
          roughness={0.3}
        />
      </instancedMesh>
    </group>
  );
}

function Nucleus({ melt }) {
  const core = useRef();
  const glow = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const pulse = 1 + Math.sin(t * (1.4 + melt * 1.6)) * (0.035 + melt * 0.06);
    if (core.current) core.current.scale.setScalar(pulse);
    if (glow.current) {
      glow.current.scale.setScalar(1.55 + Math.sin(t * 1.8) * 0.08 + melt * 0.25);
      glow.current.material.opacity = 0.1 + melt * 0.08;
    }
  });

  return (
    <group>
      {/* soft matte shell */}
      <mesh ref={glow}>
        <sphereGeometry args={[0.62, 32, 32]} />
        <meshBasicMaterial
          color="#a1a1aa"
          transparent
          opacity={0.1}
          depthWrite={false}
        />
      </mesh>

      {/* nucleus core */}
      <mesh ref={core}>
        <sphereGeometry args={[0.42, 48, 48]} />
        <meshStandardMaterial
          color="#e4e4e7"
          metalness={1}
          roughness={0.22}
          emissive="#71717a"
          emissiveIntensity={0.35 + melt * 0.3}
        />
      </mesh>

      <pointLight
        position={[0, 0, 0]}
        color="#d4d4d8"
        intensity={1.6 + melt * 1.0}
        distance={9}
        decay={2}
      />
    </group>
  );
}

export default function AtomicModel({ melt = 0 }) {
  return (
    <group>
      <Nucleus melt={melt} />
      {SHELLS.map((s, i) => (
        <OrbitRing
          key={i}
          radius={s.radius}
          tilt={s.tilt}
          thickness={s.thickness}
          melt={melt}
        />
      ))}
      <Electrons melt={melt} />
    </group>
  );
}
