import React from 'react'
import { headerThreeFontSize, paragraphFontSize } from '../theme'

interface ProjectCardProps {
    title: string
    description: string
    githubUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubUrl }) => {
    return (
        <div className='rounded-lg bg-gray max-w-xl lg:px-16 lg:py-12 md:p-12 p-8 flex flex-col shadow-xl'>
            <h3 className={`${headerThreeFontSize} font-bold text-opacity-0 text-gray`}>
                <span className='bg-clip-text bg-gradient-to-r from-primary to-secondary'>{title}</span></h3>
            <p className={`text-white mt-8 ${paragraphFontSize}`}>{description}</p>
            <div className="flex justify-end">
                <a href={githubUrl}>
                    <button className={`${paragraphFontSize} rounded-lg mt-8 px-4 py-2 text-white border-white border-2 hover:border-secondary hover:text-secondary transition-colors duration-300`}>
                        Github
                    </button>
                </a>
            </div>
        </div >
    )
}

export default ProjectCard