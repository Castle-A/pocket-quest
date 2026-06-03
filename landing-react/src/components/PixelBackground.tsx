'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import dynamic from 'next/dynamic'

// Pixel art shapes as tiny 3D boxes
const PIXEL_SHAPES = [
  // Sword
  { color: '#2563EB', pixels: [[0,0],[1,0],[2,0],[2,1],[2,2],[2,3],[1,3],[0,3]] },
  // Shield
  { color: '#7C3AED', pixels: [[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2],[1,3]] },
  // Star
  { color: '#F59E0B', pixels: [[1,0],[0,1],[1,1],[2,1],[1,2]] },
  // Heart
  { color: '#EF4444', pixels: [[0,0],[1,0],[2,0],[0,1],[2,1],[1,2]] },
  // Gem
  { color: '#06B6D4', pixels: [[1,0],[0,1],[1,1],[2,1],[1,2]] },
  // Potion
  { color: '#10B981', pixels: [[1,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]] },
]

function PixelShape({ shape, position, speed, offset }: {
  shape: typeof PIXEL_SHAPES[number]
  position: [number, number, number]
  speed: number
  offset: number
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed + offset) * 0.3
    groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * speed * 0.5 + offset) * 0.1
  })

  const pixelSize = 0.06
  const gap = 0.005

  return (
    <group ref={groupRef} position={position}>
      {shape.pixels.map((px, i) => (
        <mesh key={i} position={[px[0] * (pixelSize + gap), px[1] * (pixelSize + gap), 0]}>
          <boxGeometry args={[pixelSize, pixelSize, pixelSize * 0.5]} />
          <meshStandardMaterial
            color={shape.color}
            transparent
            opacity={0.7}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  const shapes = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      shape: PIXEL_SHAPES[i % PIXEL_SHAPES.length],
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 2 - 1,
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 0.4,
      offset: Math.random() * Math.PI * 2,
      floatIntensity: 0.5 + Math.random() * 1.5,
    }))
  }, [])

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      {shapes.map((s, i) => (
        <Float
          key={i}
          speed={s.speed}
          rotationIntensity={0.2}
          floatIntensity={s.floatIntensity}
          floatingRange={[-0.3, 0.3]}
        >
          <PixelShape
            shape={s.shape}
            position={s.position}
            speed={s.speed}
            offset={s.offset}
          />
        </Float>
      ))}
    </>
  )
}

function PixelBackgroundInner() {
  return (
    <div className="fixed inset-0 z-0" style={{ filter: 'blur(60px)', opacity: 0.35, pointerEvents: 'none' }}>
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

export default dynamic(() => Promise.resolve(PixelBackgroundInner), { ssr: false })
