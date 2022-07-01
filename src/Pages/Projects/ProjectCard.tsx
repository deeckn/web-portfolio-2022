import React from 'react'
import WindowCardContainer from '../../Components/WindowCardContainer'
import { headerThreeFontSize, paragraphFontSize } from '../../theme'

interface ProjectCardProps {
    title: string
    image: any
    imageAlt: string
    description: string
    url: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, imageAlt, description, url }) => {
    return (
        <WindowCardContainer>
            <h3 className={`${headerThreeFontSize} text-smoke dark:text-dark font-bold mb-4`}>{title}</h3>
            <img src={image} alt={imageAlt} className="rounded-md" />
            <p className={`${paragraphFontSize} text-smoke mt-4 dark:text-dark`}>{description}</p>

            <button className={`text-dark dark:text-smoke ${paragraphFontSize} mt-8 bg-white
             dark:bg-dark rounded-md font-bold px-4 py-2 w-fit hover:bg-dark border-2 hover:border-smoke 
             hover:text-smoke duration-300 dark:hover:bg-smoke dark:hover:text-dark dark:hover:border-dark`}>
                <a href={url} target={"_blank"} rel="noreferrer">
                    Github
                </a>
            </button>
        </WindowCardContainer>
    )
}

export default ProjectCard