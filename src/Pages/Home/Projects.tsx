import React from 'react'
import ProjectCard from '../Components/ProjectCard'

const Projects: React.FC = () => {
    return (
        <section className='px-96 py-20'>
            <h2 className='font-bold text-6xl text-dark'>Projects<span className='text-pink'>.</span></h2>
            <div className='mt-16 grid gap-16 justify-between grid-cols-2'>
                <ProjectCard
                    title='GIN ARAI DEE'
                    description='An Android application written in Java. Provides food recommendations, food randomizer, bill splitting, and dietary planning.'
                    githubUrl='/' />

                <ProjectCard
                    title='GPA DEE MHAI'
                    description="It's hard to find an online GPA calculator with the same grading system as my country. So, why not build my own GPA calculator?"
                    githubUrl='/' />

                <ProjectCard
                    title='Warehouse Management'
                    description="A warehouse storage management system made with PyQt, SQLAlchemy, and SQLite. Using the MVC architecture."
                    githubUrl='/' />

                <ProjectCard
                    title='Web Portfolio'
                    description="This portfolio website is created using React, Typescript, Tailwind, Framer Motion, Axios, and React Router."
                    githubUrl='/' />
            </div>
        </section>
    )
}

export default Projects