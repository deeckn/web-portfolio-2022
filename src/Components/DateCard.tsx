import React from 'react'

interface DateCardProps {
    month: string,
    year: string,
    topic: string
}

const DateCard: React.FC<DateCardProps> = ({ month, year, topic }) => {
    return (
        <>
            <div className='flex items-center px-8 my-4'>
                <div>
                    <p className='text-pink text-m md:text-lg lg:text-xl'>{month}</p>
                    <p className='text-2xl font-extralight md:text-3xl lg:text-4xl'>{year}</p>
                </div>
                <h3 className='w-full ml-8 font-bold text-project-card-title text-m md:text-lg lg:text-xl'>{topic}</h3>
            </div>
        </>
    )
}

export default DateCard