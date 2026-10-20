import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Float } from "@react-three/drei";
import AtomicModel from "./AtomicModel";
import CrystalLattice from "./CrystalLattice";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} color="#e4e4e7" />

      {/* key — hard specular, top-right */}
      <directionalLight
        position={[6, 8, 4]}
        intensity={2.0}
        color="#ffffff"
      />
      {/* fill — soft neutral from the left */}
      <directionalLight
        position={[-7, 2, -3]}
        intensity={0.85}
        color="#a1a1aa"
      />
      {/* rim — silver kicker behind */}
      <directionalLight
        position={[0, -5, -8]}
        intensity={0.65}
        color="#d4d4d8"
      />

      <pointLight position={[0, 3, 3]} intensity={10} color="#d4d4d8" distance={14} decay={2} />
      <pointLight position={[-4, -2, 2]} intensity={7} color="#e4e4e7" distance={12} decay={2} />
    </>
  );
}

export default function Scene({ view = "atomic", temperature = 22, autoRotate = true }) {
  // 0 → fully solid, 1 → fully liquid (Ga melts at 29.76°C)
  const melt = Math.min(1, Math.max(0, (temperature - 29.76) / 40));
  const solid = temperature < 29.76;

  return (
    <Canvas
      camera={{ position: [5.2, 3.6, 6.4], fov: 42, near: 0.1, far: 100 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      className="!bg-transparent"
    >
      <color attach="background" args={["#0a0a0a"]} />
      <fog attach="fog" args={["#0a0a0a", 14, 32]} />

      <Suspense fallback={null}>
        <Lights />

        {/* Procedural studio environment for metallic reflections (no external HDR) */}
        <Environment resolution={128} frames={1}>
          <mesh scale={20}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color="#18181b" side={2} />
          </mesh>
          <mesh position={[8, 6, 2]} scale={6}>
            <planeGeometry args={[4, 2]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[-8, 2, -2]} scale={6} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[4, 2]} />
            <meshBasicMaterial color="#d4d4d8" />
          </mesh>
          <mesh position={[0, -6, 0]} scale={8} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[4, 2]} />
            <meshBasicMaterial color="#52525b" />
          </mesh>
        </Environment>

        <Float
          speed={1.2}
          rotationIntensity={0.15}
          floatIntensity={0.35}
          floatingRange={[-0.12, 0.12]}
        >
          {view === "atomic" ? (
            <AtomicModel melt={melt} />
          ) : (
            <CrystalLattice melt={melt} />
          )}
        </Float>

        <ContactShadows
          position={[0, -3.2, 0]}
          opacity={0.4}
          scale={16}
          blur={2.6}
          far={6}
          color="#3f3f46"
        />

        <OrbitControls
          enableDamping
          dampingFactor={0.06}
          rotateSpeed={0.65}
          zoomSpeed={0.8}
          panSpeed={0.5}
          minDistance={3.2}
          maxDistance={16}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI - 0.2}
          autoRotate={autoRotate}
          autoRotateSpeed={solid ? 0.35 : 0.8}
          makeDefault
        />
      </Suspense>
    </Canvas>
  );
}
