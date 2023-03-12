import { Html, useProgress } from '@react-three/drei'
import React from 'react'


const Loader = () => {

  const {progress} = useProgress();

  return (

    <Html>

      <span className='canvas-load'></span>
      <p style={{ fontSize: 14, fontWeight: 700, color: '#212F3D', marginTop: 40, }}> {progress.toFixed(2)}% </p>

    </Html>

  )
}

export default Loader