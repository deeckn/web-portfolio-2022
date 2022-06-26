import React from 'react'
import { headerTwoFontSize, sectionPadding } from '../../theme'
import ContactLink from '../../Components/ContactLink'

const Cta: React.FC = () => {
    return (
        <section className={`bg-white pb-20 dark:bg-dark ${sectionPadding}`}>
            <h2 className={`${headerTwoFontSize} text-dark font-bold dark:text-white lg:mb-16 mb-8`}>Interested<span className='text-secondary'>?</span></h2>
            <ul>
                <ContactLink
                    variant='email'
                    text='ckn.deesit@gmail.com'
                    url='mailto:ckn.deesit@gmail.com?'
                    size='body' />

                <ContactLink
                    variant='linkedin'
                    text='Chakrin Deesit'
                    url='https://www.linkedin.com/in/chakrin-deesit-076804209'
                    size='body' />

                <ContactLink
                    variant='instagram'
                    text='@dee.ckn'
                    url='https://www.instagram.com/dee.ckn/'
                    size='body' />

                <ContactLink
                    variant='github'
                    text='deeckn'
                    url='https://github.com/deeckn'
                    size='body' />
            </ul>
        </section>
    )
}

export default Cta