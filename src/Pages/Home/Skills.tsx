import React from 'react'
import { FaReact, FaPython } from 'react-icons/fa'
import { SiTypescript, SiCsharp } from 'react-icons/si'

const Skills: React.FC = () => {
    return (
        <section className='px-96 py-20 dark:bg-dark'>
            <h2 className='text-6xl font-bold text-dark dark:text-white'>Technical Skills<span className='text-pink'>.</span></h2>
            <div className='my-24 text-dark dark:text-white'>
                <ul className='flex justify-between items-center'>
                    <li><FaReact size={200} /></li>
                    <li><SiTypescript size={200} /></li>
                    <li><SiCsharp size={200} /></li>
                    <li><FaPython size={200} /></li>
                </ul>
            </div>
        </section>
    )
}

export default Skills