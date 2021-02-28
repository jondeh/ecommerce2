import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

import '../../SCSS/LandingPage.scss';
// import { pageSection } from '../../data/webData';

import video1 from '../../data/media/sampleVideo1.mp4';

const LandingPage = () => {
    const { user } = useContext(UserContext);
    const { push } = useHistory()

    const handleClick = (loggedIn) => {
        if (loggedIn) {
            push ('/my-plan');
        } else {
            push ('/customize');
        };
    };

    return (
        <div className="landing-page">
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
                <Button 
                    onClick={() => handleClick(user)} variant="contained">
                        {user ? "MY PLAN" : 'LETS GET STARTED'}
                </Button>
            </div>
        </div>
    )
}

export default LandingPage;