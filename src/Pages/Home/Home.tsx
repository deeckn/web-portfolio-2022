import React from 'react'
import About from './About'
import Background from './Background'
import Cta from './Cta'
import Hero, { DarkMode } from './Hero'
import Projects from './Projects'
import Skills from './Skills'

const Home: React.FC<DarkMode> = ({ darkMode, toggleDarkMode }) => {
    return (
        <>
            <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <About />
            <Skills />
            <Projects />
            <Background />
            <Cta />
        </>
    )
}

export default Home