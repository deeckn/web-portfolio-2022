import React from 'react'
import { FaLinkedin, FaInstagram, FaGithubSquare } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { headerFourFontSize, headerThreeFontSize, paragraphFontSize } from '../theme'


interface IContactLinkProps {
    variant: 'email' | 'linkedin' | 'instagram' | 'github'
    text: string
    url: string
    size: 'body' | 'footer' | 'page'
}

const ContactLink: React.FC<IContactLinkProps> = ({ variant, text, url, size }) => {
    let iconSize = size === 'body' ? 60 : 30

    let icon
    switch (variant) {
        case 'email':
            icon = <HiOutlineMail size={iconSize} />
            break
        case 'linkedin':
            icon = <FaLinkedin size={iconSize} />
            break
        case 'instagram':
            icon = <FaInstagram size={iconSize} />
            break
        case 'github':
            icon = <FaGithubSquare size={iconSize} />
            break
    }

    if (size === 'page') {
        let icon
        const iconSize = 'lg:text-7xl md:text-6xl sm:text-5xl text-4xl'
        switch (variant) {
            case 'email':
                icon = <HiOutlineMail className={iconSize} />
                break
            case 'linkedin':
                icon = <FaLinkedin className={iconSize} />
                break
            case 'instagram':
                icon = <FaInstagram className={iconSize} />
                break
            case 'github':
                icon = <FaGithubSquare className={iconSize} />
                break
        }

        return (
            <li className={`my-4 xl:my-8 text-dark dark:text-smoke hover:underline`}>
                <a href={url} target={"_blank"} className='flex items-center gap-2 xl:gap-4'>
                    {icon}
                    <p className={`${headerFourFontSize}`}>{text}</p>
                </a>
            </li>
        )
    }

    return (
        <li className={`my-8 dark:text-white hover:underline ${size === 'footer' ? 'text-white' : null}`}>
            <a href={url} className='flex items-center gap-4'>
                {icon}
                <p className={`${paragraphFontSize}`}>{text}</p>
            </a>
        </li>
    )
}

export default ContactLink