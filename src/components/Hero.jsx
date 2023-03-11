import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { SoullesFace } from './canvas'



const Hero = () => {

  return (

    <section className='relative w-full h-screen mx-auto '>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-6xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-8'>
          <div className='w-5 h-5 rounded-full bg-[#283747]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={` ${styles.heroHeadText} text-slate-800`}>Hi, I'm <span className='text-[#4A235A]'>Kamil</span> </h1>
          <p className={ `${styles.heroSubText} mt-4 text-slate-800` }>I am a student, software developer <br className='sm:block hidden' /> and a motivated learner!</p>
        </div>

      </div>

      <SoullesFace />

    </section>

  )
}

export default Hero