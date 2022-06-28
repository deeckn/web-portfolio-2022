import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Controls from './Controls'
import { motion } from 'framer-motion'
import { headerOneFontSize, homePageLinkFontSize, sectionPadding } from '../../theme'

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
        <section className={`${sectionPadding} bg-smoke dark:bg-dark max-h-screen`}>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0
                }}
                className={`${headerOneFontSize} font-bold text-dark dark:text-white`}>{!titleVariant ? "Chakrin" : "Call Me"}</motion.h1>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.75
                }}
                className={`${headerOneFontSize} font-bold text-opacity-0 text-gray`}>
                <span className='bg-clip-text bg-gradient-to-r from-primary to-secondary'>{!titleVariant ? "Deesit" : "Dee"}</span>
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 1.5
                }}
                className='font-bold text-gray mt-12 dark:text-white lg:text-2xl md:text-xl text-lg'>
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
                    <li className={`font-bold text-primary ${homePageLinkFontSize}`}>
                        <a href='mailto:ckn.deesit@gmail.com?' className='flex items-center gap-1 hover:underline cursor-pointer'>Email<FaArrowRight /></a>
                    </li>
                    <li className={`font-bold text-primary ${homePageLinkFontSize}`}>
                        <a href='https://www.linkedin.com/in/chakrin-deesit-076804209' className='flex items-center gap-1 hover:underline cursor-pointer'>Linkedin<FaArrowRight /></a>
                    </li>
                </ul>
            </motion.div>
            <Controls
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                titleVariant={titleVariant}
                toggleTitleVariant={toggleTitleVariant} />

            <div className='flex pt-16 items-center gap-4 xl:hidden'>
                <div className='px-1 py-2 dark:bg-white w-24 rounded-full bg-gray'>
                    <motion.div
                        className='w-8 h-8 rounded-full cursor-pointer'
                        variants={{
                            on: { x: "+170%", backgroundColor: "#F46B45" },
                            off: { x: "+10%", backgroundColor: "#F5F5F5" },
                        }}
                        animate={darkMode ? "on" : "off"}
                        onClick={toggleDarkMode}></motion.div>
                </div>
                <h2 className={`font-bold text-dark ${homePageLinkFontSize} dark:text-white`}>Dark Mode</h2>
            </div>
        </section>
    )
}

export default Hero