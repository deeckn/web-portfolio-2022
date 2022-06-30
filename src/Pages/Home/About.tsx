import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { headerTwoFontSize, homePageLinkFontSize, paragraphFontSize, sectionPadding } from '../../theme'

// TODO: Context Manager for darkMode, toggleDarkMode, setCurrentPage

const About: React.FC = () => {
    return (
        <section className={`bg-smoke 2xl:pb-20 dark:bg-dark ${sectionPadding}`}>
            <h2 className={`${headerTwoFontSize} text-dark font-bold dark:text-white lg:mb-16 mb-8`}>About<span className='text-secondary'>.</span></h2>
            <p className={`${paragraphFontSize} dark:text-white`}>Software Engineering is the field I'm into. In order to succeed that I have to dive deep into software development. Immersing myself with OOP practices and languages like Python, C#, and Java. Applying the knowledge into a software product. The performance of a system cannot be looked over, data structures and algorithms plays a role in creating efficient and readable code.</p>
            <p className={`${paragraphFontSize}text-xl mt-8 dark:text-white`}>However, I lack experience. Opportunities are very welcomed.</p>
            <Link
                to="/about"
                className={`flex items-center gap-1 w-full justify-end mt-8 text-primary hover:underline font-bold ${homePageLinkFontSize}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Learn more<FaArrowRight />
            </Link>
        </section >
    )
}

export default About