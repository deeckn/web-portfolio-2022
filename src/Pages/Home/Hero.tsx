import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Controls from './Controls'
import { motion } from 'framer-motion'

interface HeroProps {
    darkMode: boolean
    toggleDarkMode: () => void
}

const Hero: React.FC<HeroProps> = ({ darkMode, toggleDarkMode }) => {
    const [titleVariant, setTitleVariant] = useState(false)

    const toggleTitleVariant = () => {
        setTitleVariant(!titleVariant)
    }

    return (
        <section className='px-96 pt-40 dark:bg-dark max-h-screen'>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0
                }}
                className='text-9xl font-bold text-dark dark:text-white'>{!titleVariant ? "Chakrin" : "Call Me"}</motion.h1>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.75
                }}
                className='font-bold text-9xl text-opacity-0 text-gray'>
                <span className='bg-clip-text bg-gradient-to-r from-purple to-pink'>{!titleVariant ? "Deesit" : "Dee"}</span>
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 1.5
                }}
                className='font-bold text-gray text-2xl mt-12 dark:text-white'>
                <h2>A frontend web developer. </h2>
                <h2 className='mt-4'>A student and a manga reader.</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 2.25
                }}
                className='mt-16'>
                <ul className='flex gap-16'>
                    <li className='font-bold text-pink text-2xl'>
                        <a href='mailto:ckn.deesit@gmail.com?' className='flex items-center gap-1 hover:underline cursor-pointer'>Email<FaArrowRight /></a>
                    </li>
                    <li className='font-bold text-pink text-2xl'>
                        <a href='https://www.linkedin.com/in/chakrin-deesit-076804209' className='flex items-center gap-1 hover:underline cursor-pointer'>Linkedin<FaArrowRight /></a>
                    </li>
                </ul>
            </motion.div>
            <Controls
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                titleVariant={titleVariant}
                toggleTitleVariant={toggleTitleVariant} />
        </section>
    )
}

export default Hero