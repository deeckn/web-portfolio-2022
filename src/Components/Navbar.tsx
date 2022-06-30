import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'

interface NavbarProps {
    currentPage: string
    setCurrentPage: (newPage: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {

    interface NavLinkProps {
        path: string
        text: string
        current: boolean
    }

    const NavLink: React.FC<NavLinkProps> = ({ path, text, current }) => {
        return <Link
            to={path}
            className={`${current ? 'text-white' : 'text-gray'} lg:px-4 lg:mx-2 py-2 text-xl rounded-lg lg:font-bold hover:text-white hover:bg-gray transition-colors duration-300`}>
            {text}
        </Link>
    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <nav className='flex flex-col py-6 bg-dark border-b-2 border-gray items-start md:px-24 sm:px-16 px-8 lg:flex-row lg:items-center lg:justify-between'>
                <Link to="/" className='text-white lg:px-6 lg:py-2 text-xl rounded-md font-bold hover:bg-gray duration-300 hover:px-6 hover:py-2'>Chakrin D.</Link>
                <ul className={`flex-col mt-4 lg:mt-0 lg:flex-row gap-4 lg:gap-0 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
                    <li onClick={() => setCurrentPage('home')}><NavLink path='/' text='Home' current={currentPage === 'home'} /></li>
                    <li onClick={() => setCurrentPage('about')}><NavLink path='/about' text='About' current={currentPage === 'about'} /></li>
                    <li onClick={() => setCurrentPage('projects')}><NavLink path='/projects' text='Projects' current={currentPage === 'projects'} /></li>
                    <li onClick={() => setCurrentPage('contact')}><NavLink path='/contact' text='Contact' current={currentPage === 'contact'} /></li>
                </ul>
                <HiMenuAlt3 className='text-white flex lg:hidden absolute top-6 right-6 sm:right-16 md:right-24' size={30} onClick={() => setIsOpen(!isOpen)} />
            </nav>
        </header>
    )
}

export default Navbar