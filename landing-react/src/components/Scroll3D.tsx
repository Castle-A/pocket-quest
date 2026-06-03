'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ScrollReactiveShapes() {
  const groupRef = useRef<THREE.Group>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    // Rotate entire group based on scroll
    groupRef.current.rotation.y = scrollY * 0.001
    groupRef.current.rotation.x = Math.sin(scrollY * 0.0005) * 0.3
    // Subtle floating
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <group ref={groupRef}>
      {/* Large distorted sphere — background accent */}
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[-5, 2, -4]} scale={1.2}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#3B82F6"
            distort={0.15}
            speed={1}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.08}
          />
        </mesh>
      </Float>

      {/* Medium torus — mid-ground */}
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[5, -1, -3]} rotation={[0.5, 0.3, 0]} scale={0.8}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial
            color="#8B5CF6"
            roughness={0.1}
            metalness={0.95}
            transparent
            opacity={0.1}
            emissive="#8B5CF6"
            emissiveIntensity={0.05}
          />
        </mesh>
      </Float>

      {/* Small icosahedron — foreground accent */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[4, 3, -2]} scale={0.5}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#06B6D4"
            distort={0.2}
            speed={1.5}
            roughness={0.15}
            metalness={0.85}
            transparent
            opacity={0.12}
            emissive="#06B6D4"
            emissiveIntensity={0.08}
          />
        </mesh>
      </Float>

      {/* Tiny floating cubes */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh position={[-4, -2, -1]} scale={0.2}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#F59E0B" roughness={0.2} metalness={0.8} transparent opacity={0.15} emissive="#F59E0B" emissiveIntensity={0.1} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[3, -3, -1.5]} scale={0.15}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#EC4899" roughness={0.1} metalness={0.9} transparent opacity={0.12} emissive="#EC4899" emissiveIntensity={0.08} />
        </mesh>
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <pointLight position={[-3, 2, 3]} intensity={0.2} color="#3B82F6" />
      <ScrollReactiveShapes />
    </>
  )
}

export default function Scroll3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: 0.5 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
