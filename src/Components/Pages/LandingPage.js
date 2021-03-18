import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../../context/UserContext';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import TextOverlay from '../Utility/TextOverlay';
import Logo from '../Utility/Logo';

import GoogleMap from '../Utility/GoogleMap';
import '../../SCSS/LandingPage.scss';
// import { pageSection } from '../../data/webData';

import video1 from '../../data/media/sampleVideo1.mp4';
import video2 from '../../data/media/playing-with-kids.mp4';

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

    // const handleEnded = () => {
    //     console.log('ENDED')
    // }

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
                    {/* <source src={video2}></source> */}
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