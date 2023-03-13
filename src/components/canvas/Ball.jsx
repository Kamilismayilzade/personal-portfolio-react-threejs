import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../Loader';

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])

  return (

    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshToonMaterial color='#273746' polygonOffset polygonOffsetFactor={-5} flatShading />

        <Decal map={decal} position={[0, 0, 1]} rotation={[ Math.PI * 2, 0, 6.25 ]} flatShading />
      </mesh>
    </Float>

  )
} 


const BallCanvas = ({ icon }) => {

  return (

    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      
      <Suspense fallback={ <CanvasLoader /> }>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl = {icon} />
      </Suspense>

      <Preload all />

    </Canvas>

  )

}


export default BallCanvas