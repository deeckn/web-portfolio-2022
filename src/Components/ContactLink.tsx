import React from 'react'
import { FaLinkedin, FaInstagram, FaGithubSquare } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { paragraphFontSize } from '../theme'


interface IContactLinkProps {
    variant: 'email' | 'linkedin' | 'instagram' | 'github'
    text: string
    url: string
    size: 'body' | 'footer'
}

const ContactLink: React.FC<IContactLinkProps> = ({ variant, text, url, size }) => {
    const iconSize = size === 'body' ? 60 : 30

    let icon;
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