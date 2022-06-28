import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { headerTwoFontSize, homePageLinkFontSize, sectionPadding } from '../../theme'
import ProjectCard from '../../Components/ProjectCard'

const Projects: React.FC = () => {
    return (
        <section className={`bg-smoke pb-20 dark:bg-dark ${sectionPadding}`}>
            <h2 className={`${headerTwoFontSize} font-bold text-dark dark:text-white lg:mb-16 mb-8`}>Projects<span className='text-secondary'>.</span></h2>
            <div className='lg:grid lg:grid-cols-2 lg:gap-16 justify-between flex flex-col items-center gap-8'>
                <ProjectCard
                    title='GIN ARAI DEE'
                    description='An Android application written in Java. Provides food recommendations, food randomizer, bill splitting, and dietary planning.'
                    githubUrl='https://github.com/deeckn/GIN-ARAI-DEE' />

                <ProjectCard
                    title='GPA DEE MHAI'
                    description="It's hard to find an online GPA calculator with the same grading system as my country. So, why not build my own GPA calculator?"
                    githubUrl='https://github.com/deeckn/GPA-DEE-MHAI' />

                <ProjectCard
                    title='WMS'
                    description="A warehouse storage management system made with PyQt, SQLAlchemy, and SQLite. Using the MVC architecture."
                    githubUrl='https://github.com/deeckn/Warehouse-Management' />

                <ProjectCard
                    title='Web Portfolio'
                    description="This portfolio website is created using React, Typescript, Tailwind, Framer Motion, Axios, and React Router."
                    githubUrl='/' />
            </div>

            <Link to="/projects" className={`flex items-center gap-1 w-full justify-end mt-16 text-primary hover:underline font-bold ${homePageLinkFontSize}`}>View more projects<FaArrowRight /></Link>
        </section>
    )
}

export default Projects