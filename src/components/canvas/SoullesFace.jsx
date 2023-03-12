import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'


const SoullesFace = () => {

  const soul = useGLTF('./bm86_portable_pc/scene.gltf');

  return (
    
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight position={[ -20, 50, 10 ]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={soul.scene} scale={10} position={[ 0, -3.25, -1.5 ]} rotation={[ -0.01, -0.2, -0.1 ]} />
    </mesh>

  )
}


const SoulCanvas = () => {

  return (

    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      
      <Suspense fallback={ <CanvasLoader /> }>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <SoullesFace />
      </Suspense>

      <Preload all />

    </Canvas>

  )

}

export default SoulCanvas