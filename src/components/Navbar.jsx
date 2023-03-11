import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles';
import { navLinks } from '../constants/constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (

      <nav className={`${styles.paddingX} fixed top-0 w-full flex items-center py-4 z-30 bg-primary`}>
        
        <div className='w-full flex justify-between items-center mx-auto max-w-6xl'>

            <Link to='/' className='flex items-center gap-2' onClick={ ()=> { setActive(''); window.scrollTo(0,0,); }} >
              <img src={logo} alt="logo" className='w-24 h-24 object-contain' />
              <p className='font-bold cursor-pointer text-[20px]'> Kamil <span className='sm:block hidden'>JavaScript Developer</span> </p>
            </Link>

            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map( (navLink)=> (
                  <li key={navLink.id} className={ `${ active === navLink.title ? 'text-slate-800' : 'text-secondary' } hover:text-zinc-900 text-[20px] cursor-pointer` } onClick={ ()=> setActive(navLink.title) } >
                    <a href={` #${navLink.id} `}> {navLink.title} </a>
                  </li>
                ) )}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={menu} alt="menu" className='w-[24px] h-[24px] object-contain cursor-pointer' onClick={ ()=> setToggle(!toggle) } />
            </div>

        </div>

      </nav>

  )
}

export default Navbar