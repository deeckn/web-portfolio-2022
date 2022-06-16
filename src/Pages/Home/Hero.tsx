import React from 'react'
import HeroBg from '../../Assets/homeHeroBg.png'

const Hero: React.FC = () => {
    return (
        <section className='h-screen'>
            <div className='flex flex-col h-full justify-center mx-8 sm:mx-8 md:mx-36 lg:mx-72 xl:mx-96'>
                <h2 className='text-5xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl'>Hello, I'm</h2>
                <h1 className='text-5xl font-bold text-orange md:text-6xl lg:text-7xl xl:text-8xl'>Chakrin Deesit</h1>
                <p className='text-white mt-6 md:mt-12 md:text-xl lg:text-2xl'>Full Stack Web Developer</p>
                <p className='text-white md:text-xl lg:text-2xl'>Studying Software Engineering at KMITL</p>
                <button className='font-bold text-white border-solid border-orange border-4 rounded-full px-4 py-2 mt-8 w-fit md:text-lg hover:bg-orange transition-colors duration-500'>GET IN TOUCH</button>
            </div>
            <div className='bg-gray-dark opacity-25 h-full w-full absolute top-0 left-0 -z-10'></div>
            <img src={HeroBg} alt="Background" className='h-screen w-full object-cover -z-20 absolute top-0 left-0' />
        </section>
    )
}

export default Hero