import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants/constants';
import SectionWrap from '../hoc/SectionWrap'
import { textVariant } from '../utilities/motion';


const ExperienceCard = ({ experience}) => {

  return (

    <VerticalTimelineElement contentStyle={{ background: '#ECF0F1', color: '#1C2833', borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }} 
      contentArrowStyle={{ borderRight: '15px solid #212F3D' }} 
      date={experience.date} 
      iconStyle={{ background: experience.iconBg }}
      icon={ 
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name} className='w-[80%] h-[80%] object-contain' />
        </div>
       } >
        
        <div>
          <h3 className='text-[20px]'> {experience.title} </h3>
          <p className='text-[15px] m-0'> {experience.company_name} </p>

          <ul className='list-disc mt-4 ml-4 space-y-2'>
            {experience.points.map((point, i)=> (
              <li key={`experience-point-${i}`} className='tracking-wider text-[14px] pl-1' > {point} </li>
            ))}
          </ul>
        </div>

    </VerticalTimelineElement>

  )

}


const Experience = () => {

  return (

    <>
    
      <motion.div variants={ textVariant() } >
        <p className={styles.sectionSubText}>What I have accomplished...</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>

        <VerticalTimeline>
          {experiences.map( (experience, i) => (

            <ExperienceCard key={i} experience={experience} />

          ))}
        </VerticalTimeline>

      </div>
    
    </>

  )
}

export default SectionWrap(Experience, 'work'); 