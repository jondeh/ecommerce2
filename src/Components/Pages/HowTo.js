import React from 'react';
import '../../SCSS/HowTo.scss';
import video2 from '../../data/media/playing-with-kids.mp4';
import HowToSection from '../Sections/HowToSection';
import MainSection from '../Sections/MainSection';
import { howToSections } from '../../data/webData';

const HowTo = () => {

    const mappedSections = howToSections.map((section, i) => {
        const { objType, text, image, imageAlt } = section;
        return <MainSection {...{index: i, objType, text, image, imageAlt}} />
    })
    return (
        <div className="how-to-container">
            <div className="how-to-main">
                <h1>how it works</h1>
                <video
                    id="landing-video" 
                    className="landing-video" 
                    playsInline={true}
                    controls
                    >
                        <source src={video2}></source>
                        {/* <source src={video1}></source> */}
                </video>
            </div>
            {mappedSections}
        </div>
    )
}

export default HowTo;