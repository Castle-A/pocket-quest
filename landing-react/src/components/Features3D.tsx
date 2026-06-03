'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Floating 3D gem that represents a feature
function FloatingGem({ position, color, speed = 1, distort = 0.3 }: {
  position: [number, number, number]
  color: string
  speed?: number
  distort?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2
    meshRef.current.rotation.y += 0.005 * speed
  })

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
      <mesh ref={meshRef} position={position} scale={0.35}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  )
}

// Floating ring that orbits
function FloatingRing({ position, color, radius = 1, tubeRadius = 0.04 }: {
  position: [number, number, number]
  color: string
  radius?: number
  tubeRadius?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[radius, tubeRadius, 16, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

// Pixel art cube — 3D pixels floating
function PixelCube({ position, color }: { position: [number, number, number]; color: string }) {
  const groupRef = useRef<THREE.Group>(null)
  const pixels = useMemo(() => {
    const arr: [number, number, number][] = []
    for (let x = 0; x < 3; x++)
      for (let y = 0; y < 3; y++)
        for (let z = 0; z < 3; z++)
          if (Math.random() > 0.3) arr.push([x - 1, y - 1, z - 1])
    return arr
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.4
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
  })

  const s = 0.06
  const g = 0.01

  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef} position={position} scale={0.5}>
        {pixels.map((p, i) => (
          <mesh key={i} position={[p[0] * (s + g), p[1] * (s + g), p[2] * (s + g)]}>
            <boxGeometry args={[s, s, s]} />
            <meshStandardMaterial
              color={color}
              roughness={0.2}
              metalness={0.7}
              emissive={color}
              emissiveIntensity={0.08}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

// Star shape made of boxes
function PixelStar({ position, color }: { position: [number, number, number]; color: string }) {
  const groupRef = useRef<THREE.Group>(null)

  const pixels: [number, number, number][] = [
    [0, 2, 0], [1, 1, 0], [2, 0, 0], [1, -1, 0], [0, -2, 0], [-1, -1, 0], [-2, 0, 0], [-1, 1, 0],
    [0, 0, 0], [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0],
  ]

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.15
  })

  const s = 0.05
  const g = 0.008

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.35}>
      <group ref={groupRef} position={position} scale={0.6}>
        {pixels.map((p, i) => (
          <mesh key={i} position={[p[0] * (s + g), p[1] * (s + g), 0]}>
            <boxGeometry args={[s, s, s * 0.5]} />
            <meshStandardMaterial
              color={color}
              roughness={0.15}
              metalness={0.8}
              emissive={color}
              emissiveIntensity={0.12}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-3, 2, 3]} intensity={0.4} color="#3B82F6" />
      <pointLight position={[3, -2, 2]} intensity={0.3} color="#8B5CF6" />

      {/* Feature 1 — Lightning: yellow gem */}
      <FloatingGem position={[-3.5, 1.5, -1]} color="#F59E0B" speed={0.8} distort={0.4} />

      {/* Feature 2 — Shield: blue ring */}
      <FloatingRing position={[3.5, -0.5, -1]} color="#2563EB" radius={0.3} tubeRadius={0.03} />

      {/* Feature 3 — Gamepad: purple pixel cube */}
      <PixelCube position={[-3, -1.5, -0.5]} color="#8B5CF6" />

      {/* Feature 4 — Analytics: cyan gem */}
      <FloatingGem position={[3.5, 1.8, -0.5]} color="#06B6D4" speed={1.2} distort={0.25} />

      {/* Feature 5 — Community: green star */}
      <PixelStar position={[0, -2, -0.5]} color="#10B981" />

      {/* Extra ambient shapes */}
      <FloatingRing position={[-2, 2.5, -2]} color="#EC4899" radius={0.2} tubeRadius={0.02} />
      <FloatingGem position={[2, 2.5, -2]} color="#EF4444" speed={0.6} distort={0.35} />
    </>
  )
}

export default function Features3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.6 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
