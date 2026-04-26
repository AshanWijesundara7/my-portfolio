"use client"

// components/particle-background.tsx
// Animated particle field — add once in page.tsx, sits behind everything
// Requires: npm install three @react-three/fiber @react-three/drei

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const PARTICLE_COUNT = 280

function Particles({ isDark }: { isDark: boolean }) {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate random positions once
  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const speeds = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 20   // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20   // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10   // z
      speeds[i] = 0.002 + Math.random() * 0.004
    }
    return { positions, speeds }
  }, [])

  useFrame(() => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position
      .array as Float32Array

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Drift upward slowly
      pos[i * 3 + 1] += speeds[i]
      // Reset to bottom when off screen
      if (pos[i * 3 + 1] > 10) {
        pos[i * 3 + 1] = -10
        pos[i * 3 + 0] = (Math.random() - 0.5) * 20
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    // Very slow global rotation
    pointsRef.current.rotation.y += 0.0003
    pointsRef.current.rotation.x += 0.0001
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={isDark ? "#ffffff" : "#000000"}
        size={0.04}
        sizeAttenuation
        transparent
        opacity={isDark ? 0.35 : 0.2}
        depthWrite={false}
      />
    </points>
  )
}

// Connection lines between nearby particles (subtle web effect)
function ConnectionLines({ isDark }: { isDark: boolean }) {
  const lineRef = useRef<THREE.LineSegments>(null)

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const verts: number[] = []
    // Static sparse connections for subtle depth
    for (let i = 0; i < 60; i++) {
      const x1 = (Math.random() - 0.5) * 18
      const y1 = (Math.random() - 0.5) * 18
      const z1 = (Math.random() - 0.5) * 8
      const x2 = x1 + (Math.random() - 0.5) * 3
      const y2 = y1 + (Math.random() - 0.5) * 3
      const z2 = z1 + (Math.random() - 0.5) * 2
      verts.push(x1, y1, z1, x2, y2, z2)
    }
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3))
    return geo
  }, [])

  useFrame(() => {
    if (!lineRef.current) return
    lineRef.current.rotation.y += 0.0002
    lineRef.current.rotation.x += 0.00008
  })

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        color={isDark ? "#ffffff" : "#000000"}
        transparent
        opacity={isDark ? 0.06 : 0.04}
      />
    </lineSegments>
  )
}

export function ParticleBackground({ isDark = true }: { isDark?: boolean }) {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]} // cap pixel ratio for performance
      >
        <Particles isDark={isDark} />
        <ConnectionLines isDark={isDark} />
      </Canvas>
    </div>
  )
}
