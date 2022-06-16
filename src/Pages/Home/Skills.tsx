import React from 'react'
import { FaPython, FaReact, FaDocker, FaJava } from 'react-icons/fa'
import { SiCplusplus, SiTypescript, SiJavascript, SiCsharp, SiDotnet } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'

const Skills: React.FC = () => {
    const iconSize = 40

    return (
        <section className='flex flex-col px-8 py-12 items-center bg-gray-dark sm:px-8 md:px-36 lg:px-72 xl:px-[36rem] md:py-24 lg:py-36'>
            <h2 className='text-4xl font-bold mb-4 text-white md:text-5xl'>Skills</h2>
            <p className='text-paragraph md:text-lg lg:text-xl'>Programming Languages, Tools, and Frameworks</p>
            <div className='mt-8 grid grid-cols-4 w-full items-center text-gray-icon gap-y-8'>
                <FaPython size={iconSize} className="text-center w-full" />
                <SiCplusplus size={iconSize} className="text-center w-full" />
                <FaReact size={iconSize} className="text-center w-full" />
                <SiTypescript size={iconSize} className="text-center w-full" />
                <SiJavascript size={iconSize} className="text-center w-full" />
                <SiCsharp size={iconSize} className="text-center w-full" />
                <AiOutlineConsoleSql size={iconSize} className="text-center w-full" />
                <SiDotnet size={iconSize} className="text-center w-full" />
                <FaDocker size={iconSize} className="text-center w-full" />
                <FaJava size={iconSize} className="text-center w-full" />
            </div>
        </section>
    )
}

export default Skills