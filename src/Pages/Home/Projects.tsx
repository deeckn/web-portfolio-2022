import React from 'react'
import ProjectCard from '../../Components/ProjectCard'
import { FaUtensils, FaBook } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

const Projects: React.FC = () => {
    return (
        <section className='bg-gray-bg px-8 py-12 flex flex-col items-center sm:px-8 md:px-36 md:py-24 lg:py-36'>
            <h2 className='text-4xl font-bold text-gray-dark mb-4'>Projects</h2>
            <p className='text-paragraph md:text-lg lg:text-xl'>Projects that I did throughout my Software Engineering journey.</p>
            <ul className='mt-8 xl:flex xl:gap-4'>
                <li>
                    <ProjectCard
                        title='GIN ARAI DEE'
                        description='An Android application written in Java. Provides food recommendations, food randomizer, bill splitting, and dietary planning.'
                        icon={<FaUtensils className='text-pink' size={40} />} />
                </li>
                <li>
                    <ProjectCard
                        title='Web Portfolio'
                        description='This website is made with React, Typescript, MUI, and Tailwind.'
                        icon={<CgWebsite className='text-pink' size={40} />} />
                </li>
                <li>
                    <ProjectCard
                        title='GPA DEE MHAI'
                        description="It's hard to find an online GPA calculator with the same grading system as my univerisity. So, why not build my own GPA calculator?"
                        icon={<FaBook className='text-pink' size={40} />} />
                </li>
            </ul>
            <button className='bg-pink text-white px-8 py-2 border-solid border-2 border-pink font-bold xl:mt-8'>PROJECTS</button>
        </section>
    )
}

export default Projects