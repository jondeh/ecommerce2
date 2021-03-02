import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserContext } from '../../context/UserContext';


import { Button } from '@material-ui/core';

const MMBottom = () => {
    const { user, logout } = useContext(UserContext);
    const { setMobileMenuVisible } = useContext(AppContext);
    const { push } = useHistory();

    const handleLogIn = () => {
        setMobileMenuVisible(false);
        push('/auth');
    } 
    
    const handleLogout = () => {
        logout()
        setMobileMenuVisible(false)
        
    }

    const handleGetStarted = () => {
        push('/customize')
        setMobileMenuVisible(false)
    }

    if (user) {
        return (
            <div className="mm-bottom-container">
                <div>{user.email}</div>
                <Button
                    onClick={handleLogout} 
                    variant="contained">LOG OUT</Button>
            </div>
        )
    } else {
        return (
            <div className="mm-bottom-container">
                <Button 
                    onClick={handleLogIn} 
                    variant="contained">
                    Log In
                </Button>
                <Button  
                    onClick={handleGetStarted} 
                    variant="contained">
                    Get Started
                </Button>
            </div>
        )
    }

}

export default MMBottom;