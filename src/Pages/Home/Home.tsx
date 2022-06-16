import React from 'react'
import About from './About'
import Experience from './Experience'
import Footer from './Footer'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Footer />
        </>
    )
}

export default Home