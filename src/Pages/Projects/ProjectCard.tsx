import React from 'react'
import WindowCardContainer from '../../Components/WindowCardContainer'
import { headerThreeFontSize, paragraphFontSize } from '../../theme'

interface ProjectCardProps {
    title: string
    image: any
    imageAlt: string
    description: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, imageAlt, description }) => {
    return (
        <WindowCardContainer>
            <h3 className={`${headerThreeFontSize} text-smoke dark:text-dark font-bold mb-4`}>{title}</h3>
            <img src={image} alt={imageAlt} className="rounded-md" />
            <p className={`${paragraphFontSize} text-smoke mt-4 dark:text-dark`}>{description}</p>
        </WindowCardContainer>
    )
}

export default ProjectCard