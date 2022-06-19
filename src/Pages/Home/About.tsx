import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
    return (
        <section className='bg-white px-96 py-20 dark:bg-dark'>
            <h2 className='text-dark text-6xl font-bold dark:text-white'>About<span className='text-pink'>.</span></h2>
            <p className='text-lg mt-16 dark:text-white'>Software Engineering is the field I'm into. In order to succeed that I have to dive deep into software development. Immersing myself with OOP practices and languages like Python, C#, and Java. Applying the knowledge into a software product. The performance of a system cannot be looked over, data structures and algorithms plays a role in creating efficient and readable code.</p>
            <p className='text-lg mt-8 dark:text-white'>However, I lack experience. Opportunities are very welcomed.</p>
            <Link to="/" className='flex items-center gap-1 w-full justify-end mt-8 text-2xl text-pink hover:underline font-bold'>Learn more<FaArrowRight /></Link>
        </section>
    )
}

export default About