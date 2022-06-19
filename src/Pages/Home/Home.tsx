import React from 'react'
import About from './About'
import Hero from './Hero'

interface HomeProps {
    darkMode: boolean
    toggleDarkMode: () => void
}

const Home: React.FC<HomeProps> = ({ darkMode, toggleDarkMode }) => {
    return (
        <>
            <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <About />
        </>
    )
}

export default Home