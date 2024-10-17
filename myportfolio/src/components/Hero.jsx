import React from 'react'
import HeroImage from '../assets/hero-image.png'
import Resume from '../assets/resume.pdf'
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-60 h-60 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-120'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500'>Farhana Tania</span>
            , a dedicated Software Engineering Technology(Artificial Intelligence) student at Centennial College.
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
        "My goal is to become a skilled web developer and continuously improve my abilities.<br></br>
         I am committed to learning new technologies and staying updated with industry trends to build modern and responsive web applications."
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-purple-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button
            className='bg-gradient-to-r from-purple-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
            </a>
        </div>

    </div>
  )
}

export default Hero