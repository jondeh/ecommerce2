import React, { useState, useContext } from 'react';
import '../../SCSS/Header.scss';
import { AppContext } from '../../context/AppContext';
import { UserContext } from '../../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {colors} from '../../data/variables';

// Components

import Auth from '../Pages/Auth';
import Logo from '../Utility/Logo';
import WebMenu from './WebMenu'
import WebNav from './WebNav';
import WebAuth from './WebAuth';

import {IoIosMenu} from 'react-icons/io';
import {ImCancelCircle} from 'react-icons/im';

const { primary, secondary, accent, textColor, altBlue} = colors;

const Header = ({ mobile }) => {
    const { push } = useHistory();
    const location = useLocation();
    const { user, logout } = useContext(UserContext);
    const {mobileMenuVisible, setMobileMenuVisible, webAuthVisible, setWebAuthVisible } = useContext(AppContext);

    const handleMobileMenuClick = () => {
        setMobileMenuVisible(!mobileMenuVisible);
        let webMenu = document.getElementById("mobile-menu");
        webMenu.classList.toggle("open");
    };

    const headerStyle = {
        // // background: mobile && '#5D76A9',
        background: mobile ? primary : location.pathname === '/' ? "linear-gradient(to top, transparent,  rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))" : null
        // location.pathname === '/customize' ? "linear-gradient(to top, whitesmoke,  rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))" : "linear-gradient(to top, whitesmoke,  rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",

        // boxShadow: location.pathname === "/" || location.pathname === "/customize" ? "none" : null,
    }


    return (
        <div 
            className="header-container"
            style={headerStyle}> 

            <Logo {...{mobile, location}}/>
            <WebNav />
            
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
            <WebAuth />
            
        </div>
    )
}

export default Header;