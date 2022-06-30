import React from 'react'
import Activities from './Activities'
import CardsContainer from './CardsContainer'
import Hero from './Hero'

const About: React.FC = () => {
    return (
        <>
            <Hero />
            <CardsContainer />
            <Activities />
        </>
    )
}

export default About