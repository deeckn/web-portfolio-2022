import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

interface ControlsProps {
    darkMode: boolean
    toggleDarkMode: () => void
    titleVariant: boolean
    toggleTitleVariant: () => void
}

const Controls: React.FC<ControlsProps> = ({ darkMode, toggleDarkMode, titleVariant, toggleTitleVariant }) => {
    const [jokeText, setJokeText] = useState("What's Forest Gump's Facebook password? 1forest1")

    const switchVariant = {
        on: { x: "+175%", backgroundColor: "#F46B45" },
        off: { x: "0", backgroundColor: "#EEA849" },
    }

    const fetchJoke = async () => {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        const joke = res.data.joke;
        setJokeText(joke)
    }

    return (
        <motion.section
            initial={{ opacity: 0, x: "200%", y: "200%" }}
            animate={{ opacity: 1, x: 0, y: 0, rotateZ: 12 }}
            transition={{
                ease: 'easeInOut',
                duration: 1.5,
                delay: 3
            }}
            className='hidden w-screen min-h-togglePanel bg-dark rounded-3xl rotate-12 relative -top-80 -right-36rem overflow-hidden p-16 dark:bg-gray xl:block'>
            <div className='flex items-center gap-8 mb-16'>
                <div className='p-2 bg-white w-32 rounded-full'>
                    <motion.div
                        className='w-10 h-10 bg-purple rounded-full hover:bg-pink transition-colors duration-500 cursor-pointer'
                        variants={switchVariant}
                        animate={darkMode ? "on" : "off"}
                        onClick={toggleDarkMode}></motion.div>
                </div>
                <h2 className='font-bold text-white text-2xl'>Dark Mode</h2>
            </div>

            <div className='flex items-center gap-8'>
                <div className='p-2 bg-white w-32 rounded-full'>
                    <motion.div
                        className='w-10 h-10 bg-primary rounded-full hover:bg-pink transition-colors duration-500 cursor-pointer'
                        variants={switchVariant}
                        animate={titleVariant ? "on" : "off"}
                        onClick={toggleTitleVariant}></motion.div>
                </div>
                <h2 className='font-bold text-white text-2xl'>Nice to meet you!</h2>
            </div>

            <button
                onClick={fetchJoke}
                className='rounded-lg bg-primary text-white font-bold px-8 py-4 text-xl mt-16 hover:bg-secondary transition-colors duration-500'>Treat</button>
            <p className='text-white mt-8 max-w-xl'>{jokeText}</p>
        </motion.section>
    )
}

export default Controls