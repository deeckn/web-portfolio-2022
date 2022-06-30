import React, { useContext } from 'react'
import { headerOneFontSize, headerThreeFontSize, sectionPadding } from '../../theme'
import { motion } from 'framer-motion'
import { DarkModeContext } from '../../Context/DarkModeContext'
import ContactLink from '../../Components/ContactLink'

const Contact: React.FC = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (
        <>
            <section className={`${sectionPadding} flex flex-col items-center bg-smoke dark:bg-dark`}>
                <h1 className={`${headerOneFontSize} font-bold text-opacity-0 text-gray`}>
                    <span className='bg-clip-text bg-gradient-to-r from-primary to-secondary'>Contact</span>
                </h1>
                <h3 className={`${headerThreeFontSize} font-bold text-gray mt-8 dark:text-white`}>Let's Work Together</h3>
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

            <section className={`${sectionPadding} flex flex-col items-center bg-smoke dark:bg-dark pb-32`}>
                <ul className='flex flex-col xl:flex-row font-bold items-center xl:gap-16'>
                    <ContactLink
                        variant='linkedin'
                        text='Chakrin Deesit'
                        url='https://www.linkedin.com/in/chakrin-deesit-076804209'
                        size='page' />

                    <ContactLink
                        variant='email'
                        text='ckn.deesit@gmail.com'
                        url='mailto:ckn.deesit@gmail.com?'
                        size='page' />
                </ul>

                <ul className='flex flex-col xl:flex-row font-bold items-center xl:gap-16'>
                    <ContactLink
                        variant='instagram'
                        text='@dee.ckn'
                        url='https://www.instagram.com/dee.ckn/'
                        size='page' />

                    <ContactLink
                        variant='github'
                        text='deeckn'
                        url='https://github.com/deeckn'
                        size='page' />
                </ul>
            </section>
        </>
    )
}

export default Contact