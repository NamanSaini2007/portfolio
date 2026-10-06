import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Pug() {
  const group = useRef()
  const head = useRef()
  const tail = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    // breathing
    group.current.scale.y = 1 + Math.sin(t * 2) * 0.03
    // tail wag
    tail.current.rotation.z = Math.sin(t * 6) * 0.5
    // head tilts toward mouse
    const { x, y } = state.pointer
    head.current.rotation.y += (x * 0.6 - head.current.rotation.y) * 0.1
    head.current.rotation.x += (-y * 0.4 - head.current.rotation.x) * 0.1
  })

  const fur = '#e0b184'
  const dark = '#8a6a4f'

  return (
    <group ref={group} position={[0, -0.7, 0]}>
      {/* body */}
      <mesh scale={[1.1, 0.8, 0.9]} position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.6, 48, 48]} />
        <meshStandardMaterial color={fur} roughness={0.8} />
      </mesh>

      {/* tail */}
      <mesh ref={tail} position={[0, 0.7, -0.6]} rotation={[0.8, 0, 0]}>
        <coneGeometry args={[0.12, 0.4, 16]} />
        <meshStandardMaterial color={dark} roughness={0.8} />
      </mesh>

      {/* head */}
      <group ref={head} position={[0, 1.1, 0.45]}>
        <mesh>
          <sphereGeometry args={[0.42, 48, 48]} />
          <meshStandardMaterial color={fur} roughness={0.8} />
        </mesh>
        {/* ears */}
        <mesh position={[-0.38, 0.12, -0.05]} rotation={[0, 0, 0.5]} scale={[0.5, 0.7, 0.25]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color={dark} roughness={0.9} />
        </mesh>
        <mesh position={[0.38, 0.12, -0.05]} rotation={[0, 0, -0.5]} scale={[0.5, 0.7, 0.25]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color={dark} roughness={0.9} />
        </mesh>
        {/* muzzle */}
        <mesh position={[0, -0.08, 0.35]} scale={[0.7, 0.55, 0.6]}>
          <sphereGeometry args={[0.32, 32, 24]} />
          <meshStandardMaterial color="#d9b58c" roughness={0.8} />
        </mesh>
        {/* eyes */}
        <mesh position={[-0.16, 0.05, 0.34]}>
          <sphereGeometry args={[0.06, 32, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} />
        </mesh>
        <mesh position={[0.16, 0.05, 0.34]}>
          <sphereGeometry args={[0.06, 32, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} />
        </mesh>
        {/* nose */}
        <mesh position={[0, -0.05, 0.55]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} />
        </mesh>
      </group>

      {/* legs */}
      {[[-0.3, 0.15, 0.3], [0.3, 0.15, 0.3], [-0.3, 0.15, -0.25], [0.3, 0.15, -0.25]].map((p, i) => (
        <mesh key={i} position={p}>
          <cylinderGeometry args={[0.11, 0.12, 0.35, 16]} />
          <meshStandardMaterial color={fur} roughness={0.8} />
        </mesh>
      ))}
    </group>
  )
}

export default function Pug3D() {
  return (
    <Canvas camera={{ position: [0, 1, 2.6], fov: 35 }} style={{ width: 100, height: 100 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 4, 3]} intensity={1.2} />
      <Pug />
    </Canvas>
  )
}
