'use client'

import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, RoundedBox, Float } from '@react-three/drei'
import * as THREE from 'three'

function CTA3DButton({ label, onClick }: { label: string; onClick?: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const targetScale = useRef(1)
  const currentScale = useRef(1)

  useFrame((state, delta) => {
    if (!meshRef.current) return

    // Smooth scale animation
    targetScale.current = pressed ? 0.92 : hovered ? 1.08 : 1
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale.current, delta * 12)
    meshRef.current.scale.setScalar(currentScale.current)

    // Subtle tilt on hover
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      hovered ? -0.08 : 0,
      delta * 8
    )
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      hovered ? 0.05 : 0,
      delta * 8
    )

    // Floating glow pulse
    const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.02 + 1
    if (!hovered && !pressed) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.03
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => { setHovered(false); setPressed(false) }}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
      >
        {/* Button body */}
        <RoundedBox
          ref={meshRef}
          args={[3.2, 0.7, 0.25]}
          radius={0.12}
          smoothness={4}
        >
          <meshStandardMaterial
            color={hovered ? '#1E40AF' : '#0B0B0C'}
            roughness={0.2}
            metalness={0.6}
            emissive={hovered ? '#1E40AF' : '#000000'}
            emissiveIntensity={hovered ? 0.15 : 0}
          />
        </RoundedBox>

        {/* Button text */}
        <Text
          position={[0, 0, 0.15]}
          fontSize={0.22}
          color={hovered ? '#ffffff' : '#e5e7eb'}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
          letterSpacing={0.02}
        >
          {label}
        </Text>

        {/* Glow ring behind */}
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[3.6, 1.1]} />
          <meshBasicMaterial
            color={hovered ? '#3B82F6' : '#2563EB'}
            transparent
            opacity={hovered ? 0.15 : 0.06}
          />
        </mesh>
      </group>
    </Float>
  )
}

export default function CTA3D({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div className="w-full h-24 cursor-pointer">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 3]} intensity={0.6} />
        <pointLight position={[-2, 1, 2]} intensity={0.3} color="#3B82F6" />
        <Suspense fallback={null}>
          <CTA3DButton label={label} onClick={onClick} />
        </Suspense>
      </Canvas>
    </div>
  )
}
