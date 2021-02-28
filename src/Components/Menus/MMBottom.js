import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

import { Button } from '@material-ui/core';

const MMBottom = () => {
    const { setMobileMenuVisible } = useContext(AppContext);
    const { push } = useHistory();

    const handleLogIn = () => {
        setMobileMenuVisible(false);
        push('/auth');
    }   

    const handleGetStarted = () => {
        
    }

    return (
        <div className="mm-bottom-container">
            <Button onClick={handleLogIn} variant="contained">
                Log In
            </Button>
            <Button  onClick={handleGetStarted} variant="contained">
                Get Started
            </Button>
        </div>
    )
}

export default MMBottom;