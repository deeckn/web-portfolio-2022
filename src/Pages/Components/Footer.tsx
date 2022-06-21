import React from 'react'
import { Link } from 'react-router-dom'
import { sectionPadding } from '../../theme'
import ContactLink from './ContactLink'

const Footer: React.FC = () => {
    return (
        <footer className={`bg-dark pb-20 dark:bg-gray ${sectionPadding}`}>
            <div className='flex gap-36 flex-col md:flex-row'>
                <section>
                    <h4 className='mb-8 text-4xl font-bold text-white'>Navigate<span className='text-pink'>.</span></h4>
                    <ul>
                        <li className='mt-4'><Link to='/' className='font-bold text-xl text-white hover:bg-gray duration-300 rounded-lg hover:px-4 hover:py-2 dark:hover:bg-dark'>Home</Link></li>
                        <li className='mt-4'><Link to='/' className='font-bold text-xl text-white hover:bg-gray duration-300 rounded-lg hover:px-4 hover:py-2 dark:hover:bg-dark'>About</Link></li>
                        <li className='mt-4'><Link to='/' className='font-bold text-xl text-white hover:bg-gray duration-300 rounded-lg hover:px-4 hover:py-2 dark:hover:bg-dark'>Projects</Link></li>
                        <li className='mt-4 mb-16'><Link to='/' className='font-bold text-xl text-white hover:bg-gray duration-300 rounded-lg hover:px-4 hover:py-2 dark:hover:bg-dark'>Contact</Link></li>
                    </ul>
                </section>

                <section>
                    <h4 className='mb-8 text-4xl font-bold text-white'>Contact<span className='text-pink'>.</span></h4>
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