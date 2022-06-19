import React from 'react'
import { Link } from 'react-router-dom'

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
            className={`${current && 'text-white'} px-6 py-2 text-xl rounded-md font-bold text-gray hover:text-white hover:bg-gray transition-colors duration-300`}>
            {text}
        </Link>
    }

    return (
        <header>
            <nav className='flex justify-between px-24 py-6 bg-dark border-b-2 border-gray items-center'>
                <Link to="/" className='text-white px-6 py-2 text-xl rounded-md font-bold hover:bg-gray transition-colors duration-300'>Chakrin D.</Link>
                <ul className='flex mr-24'>
                    <li onClick={() => setCurrentPage('home')}><NavLink path='/' text='Home' current={currentPage === 'home'} /></li>
                    <li onClick={() => setCurrentPage('about')}><NavLink path='/' text='About' current={currentPage === 'about'} /></li>
                    <li onClick={() => setCurrentPage('projects')}><NavLink path='/' text='Projects' current={currentPage === 'projects'} /></li>
                    <li onClick={() => setCurrentPage('contact')}><NavLink path='/' text='Contact' current={currentPage === 'contact'} /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar