import React from 'react'
import ActivitySection from '../../Components/ActivitySection'
import { headerTwoFontSize, sectionPadding } from '../../theme'
import AgodaPictureOne from '../../Assets/agodaDiscussion.jpg'
import AgodaPictureTwo from '../../Assets/agodaCards.jpg'
import AgodaPictureThree from '../../Assets/agodaModelling.jpg'
import KmitlPictureOne from '../../Assets/teachingAssistant.jpg'
import KmitlPictureTwo from '../../Assets/kmitlBuilding.jpg'
import KmitlPictureThree from '../../Assets/kmitlRoom.jpg'
import ActivityPictureOne from '../../Assets/martinscup.png'
import ActivityPictureTwo from '../../Assets/trashhero.png'
import ActivityPictureThree from '../../Assets/doitung.png'

const Activities: React.FC = () => {
    return (
        <section className={`${sectionPadding} bg-smoke dark:bg-dark flex flex-col items-center`}>
            <h2 className={`${headerTwoFontSize} font-bold text-dark dark:text-smoke mb-16`}>Activities</h2>
            <ActivitySection
                title='Internship at '
                highlightTitle='Agoda'
                description='In an eXtreme programming team working to improve the user experience for hosts.'
                textPosition='left'
                pictureOne={AgodaPictureOne}
                pictureTwo={AgodaPictureTwo}
                pictureThree={AgodaPictureThree}
            />

            <ActivitySection
                title='Teaching Assistant at '
                highlightTitle='Agoda'
                description='Supervise laboratory activities and homework.'
                textPosition='right'
                pictureOne={KmitlPictureOne}
                pictureTwo={KmitlPictureTwo}
                pictureThree={KmitlPictureThree}
            />

            <ActivitySection
                title='Other '
                highlightTitle='Activities'
                description='Swim Meets and Volunteering'
                textPosition='left'
                pictureOne={ActivityPictureOne}
                pictureTwo={ActivityPictureTwo}
                pictureThree={ActivityPictureThree}
            />
        </section>
    )
}

export default Activities