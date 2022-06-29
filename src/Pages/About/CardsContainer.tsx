import React from 'react'
import WindowCardContainer from '../../Components/WindowCardContainer'
import { headerFourFontSize, paragraphFontSize, sectionPadding } from '../../theme'
import ProfilePicture from '../../Assets/profilePicture.png'

const CardsContainer: React.FC = () => {
    return (
        <div className={`${sectionPadding} flex flex-col gap-16 bg-smoke dark:bg-dark justify-between xl:flex-row`}>
            <WindowCardContainer>
                <img src={ProfilePicture} alt="Profile" className='rounded-md' />
                <div className={`flex flex-col gap-2 mt-4 ${paragraphFontSize} text-smoke dark:text-dark`}>
                    <p><b>Name:</b> Dee</p>
                    <p><b>Age:</b> 20</p>
                    <p><b>Major:</b> Software Engineering</p>
                    <p><b>Languages:</b> English, Thai</p>
                </div>
            </WindowCardContainer>

            <WindowCardContainer>
                <h4 className={`${headerFourFontSize} font-bold mb-4 text-smoke dark:text-dark`}>About Me</h4>
                <p className={`${paragraphFontSize} mb-4 text-smoke dark:text-dark`}>Hi, I'm Dee. I am a software engineering student at KMITL, Thailand. 💻</p>
                <p className={`${paragraphFontSize} mb-4 text-smoke dark:text-dark`}>I have always have an interest in the software development process, the OOP practices, system architecture, and planning large enterprise projects. Ultimately, I would like to see my software helping others solve their problems. I am learning and continuing to improve and grow as a software engineer.</p>
                <p className={`${paragraphFontSize} text-smoke dark:text-dark`}>Recently, I've been immersing myself with web development with React, Typescript and Tailwind.</p>
            </WindowCardContainer>
        </div>
    )
}

export default CardsContainer