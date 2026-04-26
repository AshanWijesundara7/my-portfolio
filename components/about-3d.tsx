"use client"

// components/about-3d.tsx
// Floating 3D code brackets < /> for the About section
// Requires: npm install three @react-three/fiber @react-three/drei

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text3D, Center } from "@react-three/drei"
import * as THREE from "three"

function CodeBracket({
  text,
  position,
  isDark,
  speed,
  floatIntensity,
}: {
  text: string
  position: [number, number, number]
  isDark: boolean
  speed: number
  floatIntensity: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.3
  })

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={floatIntensity}>
      <Center position={position}>
        <Text3D
          ref={meshRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.6}
          height={0.08}
          curveSegments={12}
        >
          {text}
          <meshStandardMaterial
            color={isDark ? "#ffffff" : "#000000"}
            emissive={isDark ? "#ffffff" : "#000000"}
            emissiveIntensity={isDark ? 0.15 : 0.05}
            roughness={0.2}
            metalness={0.8}
            opacity={isDark ? 0.25 : 0.18}
            transparent
          />
        </Text3D>
      </Center>
    </Float>
  )
}

function FloatingSphere({ position, isDark }: { position: [number, number, number]; isDark: boolean }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.3
    ref.current.rotation.z = state.clock.elapsedTime * 0.2
  })
  return (
    <Float speed={1.2} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          color={isDark ? "#ffffff" : "#000000"}
          wireframe
          opacity={isDark ? 0.2 : 0.15}
          transparent
        />
      </mesh>
    </Float>
  )
}

export function AboutScene({ isDark = true }: { isDark?: boolean }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={isDark ? 0.5 : 0.8} />
        <pointLight position={[4, 4, 4]} intensity={isDark ? 0.6 : 1.0} />
        <pointLight position={[-4, -2, 2]} intensity={isDark ? 0.3 : 0.5} />

        {/* < on the left */}
        <CodeBracket text="<" position={[-2.2, 0.3, 0]} isDark={isDark} speed={1.5} floatIntensity={1.0} />
        {/* /> on the right */}
        <CodeBracket text="/>" position={[1.2, -0.3, 0]} isDark={isDark} speed={1.8} floatIntensity={1.2} />

        {/* Decorative floating shapes */}
        <FloatingSphere position={[-3.5, -1.5, -1]} isDark={isDark} />
        <FloatingSphere position={[3.2, 1.8, -1]} isDark={isDark} />
        <FloatingSphere position={[0, 2.5, -2]} isDark={isDark} />
      </Canvas>
    </div>
  )
}
