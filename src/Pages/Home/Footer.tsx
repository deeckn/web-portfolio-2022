import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className='bg-gray-dark flex flex-col items-center px-8 md:py-8'>
            <h2 className='text-4xl font-bold text-white my-8 text-center'>Let's Work Together!</h2>
            <button className='border-2 rounded-full border-pink px-6 py-3 text-white font-bold mb-8 hover:bg-pink transition-colors duration-500'>CONTACT ME</button>
            <hr className='text-gray-bg w-full' />
            <p className='text-paragraph my-4'>&#169; 2022 <span className='font-bold'>Chakrin Deesit</span>. All rights reserved</p>
        </footer>
    )
}

export default Footer