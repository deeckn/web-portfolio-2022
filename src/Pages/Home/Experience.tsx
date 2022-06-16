import React from 'react'
import DateCard from '../../Components/DateCard'

const Experience: React.FC = () => {
    return (
        <section className='flex flex-col my-12 sm:mx-8 md:mx-36 lg:mx-72 xl:mx-[36rem] md:my-24 lg:my-36'>
            <h2 className='text-4xl font-bold text-gray-dark w-full text-center mb-8 md:text-5xl'>Experiences<span className='text-pink'>.</span></h2>
            <hr className='text-gray-bg' />
            <DateCard month='May' year='2022' topic='Full Stack Internship at Agoda' />
            <hr className='text-gray-bg' />
            <DateCard month='Aug' year='2021' topic='Python Teaching Assistant at KMITL' />
            <hr className='text-gray-bg' />

            <h2 className='text-4xl font-bold text-gray-dark w-full text-center my-8 md:text-5xl md:mt-24 lg:mt-36'>Education<span className='text-pink'>.</span></h2>
            <hr className='text-gray-bg' />
            <DateCard month='May' year='2024' topic="King Mongkut's Institute of Technology" />
            <hr className='text-gray-bg' />
            <DateCard month='Aug' year='2020' topic='St. Andrews International School Bangkok' />
            <hr className='text-gray-bg' />
        </section>
    )
}

export default Experience