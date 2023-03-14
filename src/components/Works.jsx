import { motion } from 'framer-motion';
import React from 'react'
import Tilt from 'react-tilt';
import { styles } from '../styles';
import { github } from '../assets'
import { SectionWrap } from '../hoc'
import { projects } from '../constants/constants';
import { fadeIn, textVariant } from '../utilities/motion';



const ProjectCard = ({ i, name, description, tags, image, source_code_link }) => {

  return (
      <motion.div variants={ fadeIn('up', 'spring', i * 0.5, 0.75) } >
        
        <Tilt options={{ max: 45, scale: 1, speed: 450, }} className='p-5 rounded-2xl sm:w-[360px] w-full bg-[#ECF0F1] shadow-card'>
          
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={ ()=> window.open(source_code_link, '_blank') } className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' >
                <img src={github} alt="github" className='w-7 h-7 object-contain' />
              </div>
            </div>

          </div>

          <div className='mt-5'>
            <h3 className='font-medium text-[22px]'> {name} </h3>
            <p className='mt-2 text-[14px]'> {description} </p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map( (tag)=> (
              <p key={tag.name} className={`text-[14px] ${tag.color}`} >
                #{tag.name}
              </p>
            ))}
          </div>

        </Tilt>

      </motion.div>
  )

}


const Works = () => {

  return (

    <>
    
      <motion.div variants={ textVariant() } >
        <p className={styles.sectionSubText}>See my work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={ fadeIn('', '', 0.1, 1) } className='mt-3 text-[16px] max-w-3xl leading-[30px]' >
          The projects below are instances of my work that highlight my experience and skills.
          These are links to the source repositories and demonstrations for each project,
          along with a brief description of each. It reflects my aptitude for handling various technology,
          managing projects, and finding solutions to challenging issues.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, i) => (
          <ProjectCard key={`project-${i}`} {...project} i={i} />
        ))}
      </div>

      <p className={styles.sectionSubText} >Want to see more? Refer to my <a className='font-bold underline text-[20px]' onClick={ ()=> window.open('https://github.com/Kamilismayilzade?tab=repositories', '_blank') } >Github.</a> </p>

    </>

  )
}

export default SectionWrap(Works, ''); 