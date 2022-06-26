import React from 'react'
import { FaReact, FaPython } from 'react-icons/fa'
import { SiTypescript, SiCsharp } from 'react-icons/si'
import { headerTwoFontSize, sectionPadding } from '../../theme'

const Skills: React.FC = () => {
    const iconSize = 'lg:text-9xl md:text-8xl sm:text-7xl text-5xl'

    return (
        <section className={`bg-white dark:bg-dark ${sectionPadding} pb-8`}>
            <h2 className={`${headerTwoFontSize} font-bold text-dark dark:text-white lg:mb-16 mb-8`}>Technical Skills<span className='text-secondary'>.</span></h2>
            <div className='text-dark dark:text-white'>
                <ul className='flex justify-between items-center'>
                    <li><FaReact className={iconSize} /></li>
                    <li><SiTypescript className={iconSize} /></li>
                    <li><SiCsharp className={iconSize} /></li>
                    <li><FaPython className={iconSize} /></li>
                </ul>
            </div>
        </section>
    )
}

export default Skills