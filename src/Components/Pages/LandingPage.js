import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../../context/UserContext';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import TextOverlay from '../Utility/TextOverlay';

import GoogleMap from '../Utility/GoogleMap';
import '../../SCSS/LandingPage.scss';
// import { pageSection } from '../../data/webData';

import video1 from '../../data/media/sampleVideo1.mp4';

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

    return (
        <div className="landing-page">
            <TextOverlay />
            <video
                id="landing-video" 
                className="landing-video" 
                autoPlay 
                playsInline={true} 
                muted 
                loop={true}>
                    <source src={video1}></source>
            </video>
            <div className="funnel-start">
                <h1>let's get started</h1>
                <Button 
                    onClick={() => handleClick(user)} variant="contained">
                        see my plan
                        {/* {user ? "MY PLAN" : 'LETS GET STARTED'} */}
                </Button>
            </div>
        </div>
    )
}

export default LandingPage;