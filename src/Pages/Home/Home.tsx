import React from 'react'
import About from './About'
import Background from './Background'
import Cta from './Cta'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Background />
            <Cta />
        </>
    )
}

export default Home