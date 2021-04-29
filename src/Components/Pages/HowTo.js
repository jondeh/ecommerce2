import React from 'react';
import '../../SCSS/HowTo.scss';
import video2 from '../../data/media/playing-with-kids.mp4';
import HowToSection from '../Sections/HowToSection';
import MainSection from '../Sections/MainSection';
import { howToSections } from '../../data/webData';
import Reviews from '../Sections/Reviews';

const HowTo = () => {

    const mappedSections = howToSections.map((section, i) => {
        return <MainSection {...{index: i, section, type: "howTo"}} />
    })
    return (
        <div className="how-to-container">
            <div className="how-to-main">
                <p><h1>start today with <br></br><span>Jitterbox</span></h1></p>
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
            <Reviews>
                <h2>See what people say</h2>
            </Reviews>
        </div>
    )
}

export default HowTo;