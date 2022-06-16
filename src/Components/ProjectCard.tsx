import React from 'react'

interface ProjectCardProps {
    icon: any;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description }) => {
    return (
        <div className='flex flex-col items-center p-12 bg-white mb-8 max-w-sm h-full'>
            {icon}
            <h3 className='font-bold text-2xl mt-8 mb-4 text-project-card-title'>{title}</h3>
            <p className='text-paragraph md:text-lg lg:text-xl'>{description}</p>
        </div>
    )
}

export default ProjectCard