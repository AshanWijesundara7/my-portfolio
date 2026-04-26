"use client"

// components/hero-3d.tsx
// Floating glowing torus knot — drop this inside your hero section
// Requires: npm install three @react-three/fiber @react-three/drei

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

function TorusKnot({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.32, 180, 20, 2, 3]} />
        <MeshDistortMaterial
          color={isDark ? "#ffffff" : "#000000"}
          wireframe={true}
          distort={0.15}
          speed={2}
          opacity={isDark ? 0.18 : 0.12}
          transparent
        />
      </mesh>
      {/* Inner solid glow mesh */}
      <mesh ref={meshRef} scale={0.97}>
        <torusKnotGeometry args={[1, 0.32, 180, 20, 2, 3]} />
        <meshStandardMaterial
          color={isDark ? "#ffffff" : "#111111"}
          emissive={isDark ? "#ffffff" : "#000000"}
          emissiveIntensity={isDark ? 0.08 : 0.04}
          opacity={isDark ? 0.06 : 0.04}
          transparent
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  )
}

export function HeroScene({ isDark = true }: { isDark?: boolean }) {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={isDark ? 0.4 : 0.6} />
        <pointLight position={[5, 5, 5]} intensity={isDark ? 0.8 : 1.2} />
        <pointLight position={[-5, -5, -5]} intensity={isDark ? 0.3 : 0.5} />
        <TorusKnot isDark={isDark} />
      </Canvas>
    </div>
  )
}
