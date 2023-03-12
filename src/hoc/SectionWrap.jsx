import React from 'react'
import { styles } from '../styles'
import { staggerContainer } from '../utilities/motion'
import { motion } from 'framer-motion'

const SectionWrap = (Component, idName) => function HOC() {

    return (

        <motion.section variants={ staggerContainer() } initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25, }} className={` ${styles.padding} max-w-7xl mx-auto relative z-0 `}>
            <Component />
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
        </motion.section>

    )

}




export default SectionWrap