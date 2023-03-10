import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles';
import { navLinks } from '../constants/constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {

  return (

      <nav className={`${styles.paddingX} fixed top-0 w-full items-center py-5 z-20`}>
        
        <div className='w-full flex justify-between items-center mx-auto max-w-6xl'>
            <Link to='/' className='flex items-center gap-2' onClick={ ()=> { setActive('') }} ></Link>
        </div>

      </nav>

  )
}

export default Navbar