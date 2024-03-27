import React from 'react'
import image from './images/avatar-jessica.jpeg'
import { FaGithub,FaLinkedin,FaTwitter,FaInstagram } from "react-icons/fa";
import frontendmentor from './images/favicon-32x32.png'

function App() {
  return (
    <main className='bg-bgColor flex justify-center items-center min-h-screen'>
      <article className='bg-cardColor  rounded-lg ' >
        <div className='flex flex-col items-center py-3 px-7'>
        <img srcSet={image} alt="avatar-jessica" className='image' />
        
        <h1 className='text-titleColor text-2xl font-bold tracking-wide mb-1'>Jessica Randall</h1>
        <p className='text-brightYellow font-medium mb-2'>London, United Kingdom</p>
        <p className='text-titleColor font-normal'>"Front-end developer and avid reader."</p>
        
        <div className='flex flex-col mt-5'>
            <button className='btn flex items-center justify-center gap-2 bg-buttonColor hover:bg-hover hover:text-cardColor ease-in duration-300'><p>GitHub</p><FaGithub className='icon'/>
</button>
            <button className='btn flex items-center justify-center gap-2 bg-buttonColor hover:bg-hover hover:text-cardColor ease-in duration-300'><p>Frontend Mentor</p><img src={frontendmentor} alt="frontend mentor" className='icon fem' />
</button>
          <button className='btn flex items-center justify-center gap-2 bg-buttonColor hover:bg-hover hover:text-cardColor ease-in duration-300 '><p>LinkedIn</p> <FaLinkedin className='icon' />
</button>
          <button className='btn flex items-center justify-center gap-2 bg-buttonColor hover:bg-hover hover:text-cardColor ease-in duration-300'><p>Twitter </p><FaTwitter className='icon' />
</button>
          <button className='btn flex items-center justify-center gap-2 bg-buttonColor hover:bg-hover hover:text-cardColor ease-in duration-300'><p>Instagram</p> <FaInstagram  className='icon'/>
</button>
        </div>

        </div>
        
      </article>
    </main>
  )
}

export default App