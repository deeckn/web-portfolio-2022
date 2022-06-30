import React from 'react'
import { DarkMode } from '../Home/Hero'
import Hero from './Hero'

const Projects: React.FC<DarkMode> = ({ darkMode, toggleDarkMode }) => {
    return (
        <>
            <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </>
    )
}

export default Projects