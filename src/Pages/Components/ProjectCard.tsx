import React from 'react'

interface ProjectCardProps {
    title: string
    description: string
    githubUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubUrl }) => {
    return (
        <div className='rounded-lg bg-gray max-w-xl px-16 py-12 flex flex-col'>
            <h3 className='font-bold text-4xl text-opacity-0 text-gray'>
                <span className='bg-clip-text bg-gradient-to-r from-blue-600 to-pink'>{title}</span></h3>
            <p className='text-white text-xl mt-8'>{description}</p>
            <a href={githubUrl} className="flex justify-end"><button className='bg-white rounded-lg mt-8 px-4 py-2 text-xl font-bold text-purple'>GITHUB</button></a>
        </div >
    )
}

export default ProjectCard