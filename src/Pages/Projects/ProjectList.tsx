import React from 'react'
import ProjectCard from './ProjectCard'
import { sectionPadding } from '../../theme'
import ProjectGinAraiDee from '../../Assets/projectGad.png'
import ProjectWms from '../../Assets/projectWms.png'
import ProjectTodo from '../../Assets/projectTodo.png'
import ProjectGpa from '../../Assets/projectGpa.png'
import ProjectJoke from '../../Assets/projectJoke.png'
import ProjectCalculator from '../../Assets/projectCalculator.png'

const ProjectList: React.FC = () => {
    return (
        <section className={`${sectionPadding} flex flex-col gap-8 bg-smoke dark:bg-dark pb-36`}>
            <div className='flex flex-col gap-8 md:flex-row'>
                <ProjectCard
                    title='GIN ARAI DEE'
                    image={ProjectGinAraiDee}
                    imageAlt="GIN ARAI DEE Demo"
                    description='An Android application written in Java. Provides food recommendations, food randomizer, bill splitting, and dietary planning.'
                    url="https://github.com/deeckn/GIN-ARAI-DEE" />

                <ProjectCard
                    title='WMS'
                    image={ProjectWms}
                    imageAlt="Warehouse Management Demo"
                    description='A warehouse storage management system made with PyQt, SQLAlchemy, and SQLite. Using the MVC architecture.'
                    url="https://github.com/deeckn/Warehouse-Management" />
            </div>

            <div className='flex flex-col gap-8 md:flex-row'>
                <ProjectCard
                    title='Todo-List'
                    image={ProjectTodo}
                    imageAlt="Todo-list Demo"
                    description='A simple TODO list android application using Java and SQLite.'
                    url="https://github.com/deeckn/TODOLIST" />

                <ProjectCard
                    title='GPA DEE MHAI'
                    image={ProjectGpa}
                    imageAlt="GPA Calculator Demo"
                    description="It's hard to find an online GPA calculator with the same grading system as my university. So, why not build my own GPA calculator?"
                    url="https://github.com/deeckn/GPA-DEE-MHAI" />
            </div>

            <div className='flex flex-col gap-8 md:flex-row'>
                <ProjectCard
                    title='Dad Jokes'
                    image={ProjectJoke}
                    imageAlt="Dad Jokes API Fetch Demo"
                    description='A fun website to fetch dad jokes from an API.'
                    url="https://github.com/deeckn/Dad-Jokes" />

                <ProjectCard
                    title='Shunting Yard'
                    image={ProjectCalculator}
                    imageAlt="Shunting Yard Calculator Demo"
                    description='A web calculator that utilizes the Shunting Yard algorithm to compute mathematical expressions. Using a combination of the Stack and Queue data structures.'
                    url="https://github.com/deeckn/ShuntingYard-Calculator" />
            </div>
        </section>
    )
}

export default ProjectList