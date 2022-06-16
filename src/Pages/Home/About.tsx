import React from 'react'

const About: React.FC = () => {
    return (
        <section className='flex flex-col mx-8 my-12 md:mx-48 lg:mx-96 xl:mx-[24rem] 2xl:mx-[36rem] md:my-24 lg:my-36'>
            <h2 className='text-4xl font-bold mb-6 text-gray-dark text-center md:mb-12 md:text-5xl'>About Me</h2>
            <p className='mb-4 text-paragraph md:text-lg lg:text-xl md:mb-8'>Software Engineering is the field I'm into. In order to succeed that I have to dive deep into software development. Immersing myself with OOP practices and languages like Python, C++, and Javascript. Applying the knowledge into a software product. The performance of a system cannot be looked over, data structures and algorithms plays a role in creating efficient and readable code.</p>
            <p className='mb-8 text-paragraph md:text-lg lg:text-xl md:mb-16'>However, I lack experience. Opportunities are very welcomed.</p>
            <div className='flex justify-evenly'>
                <button className='bg-pink text-white px-4 py-2 border-solid border-2 border-pink'>LINKEDIN</button>
                <button className=' text-grey-dark px-4 py-2 border-solid border-2 border-gray-icon' style={{ color: "#3F3F3F" }}>DOWNLOAD CV</button>
            </div>
        </section>
    )
}

export default About