import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { SoulCanvas } from './canvas'



const Hero = () => {

  return (

    <section className='relative w-full h-screen mx-auto border-[1px] border-slate-800 border-opacity-10'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-6xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-8'>
          <div className='w-5 h-5 rounded-full bg-[#283747]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={` ${styles.heroHeadText} `}>Hi, I'm <span className='text-[#4A235A]'>Kamil</span> </h1>
          <p className={ `${styles.heroSubText} mt-4 text-slate-800` }>I am a student, software developer <br className='sm:block hidden' /> and a motivated learner!</p>
        </div>

      </div>

      <SoulCanvas />

      <div className='absolute w-full xs:bottom-8 bottom-32 flex justify-center items-center'>

        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#1C2833] flex justify-center items-start p-2'>

            <motion.dev animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', }} className='w-3 h-3 rounded-full bg-[#1C2833]' />

          </div>
        </a>

      </div>

    </section>

  )
}

export default Hero