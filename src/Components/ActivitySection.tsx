import React from 'react'
import { headerThreeFontSize, paragraphFontSize } from '../theme'

interface ActivitySectionProps {
    title: string
    highlightTitle: string
    description: string
    textPosition: 'left' | 'right'
    pictureOne: any
    pictureTwo: any
    pictureThree: any
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ title, highlightTitle, description, textPosition, pictureOne, pictureTwo, pictureThree }) => {
    return (
        <section className={`flex flex-col justify-between mb-16`}>
            <div className='w-full mb-8 text-center'>
                <h3 className={`${headerThreeFontSize} font-bold text-dark inline dark:text-smoke`}>{title}</h3>
                <h3 className={`${headerThreeFontSize} font-bold text-dark text-opacity-0 inline`}><span className='bg-clip-text bg-gradient-to-r from-primary to-secondary'>{highlightTitle}</span></h3>
                <p className={`${paragraphFontSize} mt-8 text-dark dark:text-smoke`}>{description}</p>
            </div>

            <div className="overflow-hidden text-gray-700 w-full">
                <div className="flex justify-end">
                    <div className="flex flex-wrap w-full">
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="Activity" className="block object-cover object-center w-full h-full rounded-lg"
                                src={pictureOne} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="Activity" className="block object-cover object-center w-full h-full rounded-lg"
                                src={pictureTwo} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img alt="Activity" className="block object-cover object-center w-full rounded-lg"
                                src={pictureThree} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActivitySection