import React, { useState, useContext } from 'react';
import '../../SCSS/Header.scss';
import { AppContext } from '../../context/AppContext';
import { UserContext } from '../../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';


// Components

import Auth from '../Pages/Auth';
import Logo from '../Utility/Logo';
import WebMenu from './WebMenu'

import {IoIosMenu} from 'react-icons/io';
import {ImCancelCircle} from 'react-icons/im';


const Header = ({ mobile }) => {
    const { push } = useHistory();
    const location = useLocation();
    const { user, logout } = useContext(UserContext);
    const {mobileMenuVisible, setMobileMenuVisible, webAuthVisible, setWebAuthVisible } = useContext(AppContext);

    const handleMobileMenuClick = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    const handleSignIn = () => {
        push('/auth')
        // setWebAuthVisible(!webAuthVisible);
    }

    const testClick = () => {
        logout()
    }

    const handleClose = () => {
        
    }

    const headerStyle = {
        background: mobile && 'white',
        boxShadow: location.pathname === "/" ? "none" : null,
    }

    // console.log("LOCATION", location);

    return (
        <div 
            style={headerStyle}
            className="header-container"> 
            <Logo {...{mobile}}/>
            {
                mobile ? 
                <ImCancelCircle 
                    className="menu-icon"
                    color={mobile ? "white" : "white"}  
                    onClick={handleMobileMenuClick} /> : 
                <IoIosMenu 
                    className="menu-icon"
                    color={mobile ? "white" : "white"}  
                    onClick={handleMobileMenuClick} />
            }
            {
                user ? 
                    <WebMenu {...{user}}/>
                // <div onClick={testClick} className="web-user-email"> {user.email} </div> 
                : <>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    className="web-sign-in" 
                    onClick={handleSignIn}>sign in
                </Button>
                </>
            }
            {/* {
                webAuthVisible ? <Auth /> : null
            } */}
            
        </div>
    )
}

export default Header;