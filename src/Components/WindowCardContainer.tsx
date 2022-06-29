import React from 'react'

interface WindowCardContainerProps {
    children: JSX.Element | JSX.Element[]
}

const WindowCardContainer: React.FC<WindowCardContainerProps> = ({ children }) => {
    return (
        <div className='xl:w-1/2 bg-dark rounded-md p-8 flex flex-col dark:bg-smoke'>
            <div className='flex gap-2 mb-6'>
                <div className='w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full'></div>
                <div className='w-3 h-3 lg:w-4 lg:h-4 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 lg:w-4 lg:h-4 bg-red-500 rounded-full'></div>
            </div>
            {children}
        </div>
    )
}

export default WindowCardContainer