import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

function App() {

  return (

    <BrowserRouter>
        <div className='relative z-0 bg-primary text-gray-900'>

          <div className=' bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />

          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>


        </div>
    </BrowserRouter>

  )
}

export default App
