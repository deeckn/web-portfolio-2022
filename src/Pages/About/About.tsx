import React from 'react'
import { DarkMode } from '../Home/Hero'
import Activities from './Activities'
import CardsContainer from './CardsContainer'
import Hero from './Hero'

const About: React.FC<DarkMode> = ({ darkMode, toggleDarkMode }) => {
    return (
        <>
            <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <CardsContainer />
            <Activities />
        </>
    )
}

export default About