import React from 'react'
import About from './About'
import Background from './Background'
import Cta from './Cta'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

interface HomeProps {
    darkMode: boolean
    toggleDarkMode: () => void
}

const Home: React.FC<HomeProps> = ({ darkMode, toggleDarkMode }) => {
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