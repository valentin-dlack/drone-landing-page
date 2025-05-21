"use client"

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useFBX } from '@react-three/drei'

// Define the props type, including the model path
interface DroneModelProps {
  modelPath: string;
}

const Model = ({ modelPath }: DroneModelProps) => {
  const fbx = useFBX(modelPath)
  // You might need to adjust the scale, position, rotation of the model
  return <primitive object={fbx} scale={0.05} rotation={[0, Math.PI / 2, 0]} />
}

const DroneModel = ({ modelPath }: DroneModelProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={5} />
    </Canvas>
  )
}

export default DroneModel 