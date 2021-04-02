import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../../context/UserContext';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import TextOverlay from '../Utility/TextOverlay';
import MainSection from '../Sections/MainSection';

import '../../SCSS/LandingPage.scss';
import { pageSections } from '../../data/webData';

import video1 from '../../data/media/sampleVideo1.mp4';
import video2 from '../../data/media/playing-with-kids.mp4';
import video3 from '../../data/media/Butterflies-On-A-Flower.mp4';

const LandingPage = () => {
    const { user } = useContext(UserContext);
    const { setIsSurvey } = useContext(AppContext);
    const { push } = useHistory()

    const handleClick = (loggedIn) => {
        if (loggedIn) {
            push ('/my-plan');
        } else {
            setIsSurvey(true)
            push ('/customize');
        };
    };

    const mappedSections = pageSections.map((section, i) => {
        const { objType, text, image, imageAlt } = section;
        return <MainSection key={i} {...{ objType, text, image, imageAlt, index: i }}/>
    });

    return (
        <div className="landing-page">
            <TextOverlay />
            <video
                id="landing-video" 
                className="landing-video" 
                autoPlay 
                playsInline={true}
                // onEnded={handleEnded} 
                loop={true}
                muted 
                >
                    <source src={video1}></source>
                    {/* <source src={video2}></source> */}
                    {/* <source src={video3}></source> */}
            </video>
            <div className="funnel-start">
                <h1>Tailored plans in less than two minutes</h1>
                <h5>Save hundreds on professional grade pest control today</h5>
                <Button 
                    onClick={() => handleClick(user)} variant="contained">
                        see my plan
                        {/* {user ? "MY PLAN" : 'LETS GET STARTED'} */}
                </Button>
            </div>
            <div className="section-page">
                {mappedSections}
            </div>

        </div>
    )
}

export default LandingPage;