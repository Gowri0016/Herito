import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { Suspense } from 'react'

function BottleModel() {
  const geometry = useLoader(STLLoader, '/Asset/001.stl')

  return (
    <mesh geometry={geometry} scale={0.02}>
      <meshPhysicalMaterial
        color="#7c3aed"
        transmission={1}
        transparent
        roughness={0.15}
        metalness={0}
        thickness={0.6}
        ior={1.45}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  )
}

export default function Product3DStl() {
  return (
    <div className="h-[420px] w-full bg-[#f7f8f5] flex justify-center items-center">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#f7f8f5')
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, 5]} intensity={0.4} />

        <Environment preset="studio" />

        <Suspense fallback={null}>
          <BottleModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
