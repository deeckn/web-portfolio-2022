import React, { useContext } from 'react'
import { headerOneFontSize, headerThreeFontSize, sectionPadding } from '../../theme'
import { motion } from 'framer-motion'
import { DarkModeContext } from '../../Context/DarkModeContext'

const Hero: React.FC = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <section className={`${sectionPadding} bg-smoke dark:bg-dark flex flex-col items-center`}>
            <h1 className={`${headerOneFontSize} font-bold text-dark dark:text-white`}>Chakrin</h1>
            <h1 className={`${headerOneFontSize} font-bold text-opacity-0 text-gray`}>
                <span className='bg-clip-text bg-gradient-to-r from-primary to-secondary'>Deesit</span>
            </h1>
            <h3 className={`${headerThreeFontSize} font-bold text-gray mt-8 dark:text-white`}>Frontend Software Engineer</h3>
            <div className='px-1 py-2 dark:bg-white w-24 rounded-full bg-gray mt-16'>
                <motion.div
                    className='w-8 h-8 rounded-full cursor-pointer'
                    variants={{
                        on: { x: "+170%", backgroundColor: "#F46B45" },
                        off: { x: "+10%", backgroundColor: "#F5F5F5" },
                    }}
                    animate={darkMode ? "on" : "off"}
                    onClick={toggleDarkMode}></motion.div>
            </div>
        </section>
    )
}

export default Hero