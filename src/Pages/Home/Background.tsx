import React from 'react'
import { headerTwoFontSize, paragraphFontSize, sectionPadding } from '../../theme'

const Background: React.FC = () => {

    const paragraphItemStyle = `${paragraphFontSize} mt-8 dark:text-white`

    return (
        <>
            <section className={`bg-white pb-20 dark:bg-dark ${sectionPadding}`}>
                <h2 className={`${headerTwoFontSize} text-dark font-bold dark:text-white lg:mb-16 mb-8`}>Experiences<span className='text-secondary'>.</span></h2>
                <p className={paragraphItemStyle}>Full Stack Software Engineering Internship at Agoda in an eXtreme Programming Team.</p>
                <p className={paragraphItemStyle}>Python Teaching Assistant at King Mongkut's Institute of Technology.</p>
                <p className={paragraphItemStyle}>Instructor for Freshmen Intro to C and Python Bootcamp.</p>
                <p className={paragraphItemStyle}>Top 5 University Ranking Kattis.</p>
            </section>

            <section className={`bg-white pb-20 dark:bg-dark ${sectionPadding}`}>
                <h2 className={`${headerTwoFontSize} text-dark font-bold dark:text-white lg:mb-16 mb-8`}>Education<span className='text-secondary'>.</span></h2>
                <p className={paragraphItemStyle}>Junior Year, Software Engineering Student at King Mongkut's Institute of Technology Ladkrabang (KMITL).</p>
                <p className={paragraphItemStyle}>Binlingual International Baccalaureate Diploma (IBDP) at St. Andrews International School Bangkok.</p>
                <p className={paragraphItemStyle}>- Level 7 in Business Management</p>
            </section>
        </>
    )
}

export default Background