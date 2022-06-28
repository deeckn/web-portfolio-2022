import React from 'react'
import { Link } from 'react-router-dom'
import { headerThreeFontSize } from '../theme'
import ContactLink from './ContactLink'

const Footer: React.FC = () => {
    const NavlinkStyles = 'text-xl text-white hover:bg-gray duration-300 rounded-lg hover:px-4 hover:py-2 dark:hover:bg-dark'
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <footer className={`bg-dark pb-20 dark:bg-gray 2xl:px-96 xl:px-60 xl:pt-24 lg:px-32 md:px-24 md:pt-16 sm:p-16 py-12 px-8`}>
            <div className='flex md:gap-36 gap-16 flex-col md:flex-row'>
                <section>
                    <h3 className={`mb-8 font-bold text-white ${headerThreeFontSize}`}>Navigate<span className='text-secondary'>.</span></h3>
                    <nav>
                        <ul>
                            <li className='mt-4'><Link to='/' className={NavlinkStyles} onClick={scrollToTop}>Home</Link></li>
                            <li className='mt-4'><Link to='/about' className={NavlinkStyles} onClick={scrollToTop}>About</Link></li>
                            <li className='mt-4'><Link to='/projects' className={NavlinkStyles} onClick={scrollToTop}>Projects</Link></li>
                            <li className='mt-4'><Link to='/contact' className={NavlinkStyles} onClick={scrollToTop}>Contact</Link></li>
                        </ul>
                    </nav>
                </section>

                <section>
                    <h3 className={`mb-8 font-bold text-white ${headerThreeFontSize}`}>Contact<span className='text-secondary'>.</span></h3>
                    <ul>
                        <ContactLink
                            variant='email'
                            text='ckn.deesit@gmail.com'
                            url='mailto:ckn.deesit@gmail.com?'
                            size='footer' />

                        <ContactLink
                            variant='linkedin'
                            text='Chakrin Deesit'
                            url='https://www.linkedin.com/in/chakrin-deesit-076804209'
                            size='footer' />

                        <ContactLink
                            variant='instagram'
                            text='@dee.ckn'
                            url='https://www.instagram.com/dee.ckn/'
                            size='footer' />

                        <ContactLink
                            variant='github'
                            text='deeckn'
                            url='https://github.com/deeckn'
                            size='footer' />
                    </ul>
                </section>
            </div>

            <figcaption className='text-white mt-16'>&#169; 2022 <span className='font-bold'>Chakrin Deesit</span>. All rights reserved</figcaption>
        </footer>
    )
}

export default Footer