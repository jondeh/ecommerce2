import React, { useState, useContext } from 'react';
import '../../SCSS/Header.scss';
import {AppContext} from '../../context/AppContext';

// Components

import LogoTitle from '../Utility/LogoTitle';

import {IoIosMenu} from 'react-icons/io';
import {ImCancelCircle} from 'react-icons/im';


const Header = ({ mobile }) => {
    const {mobileMenuVisible, setMobileMenuVisible} = useContext(AppContext)

    const handleMobileMenuClick = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    }

    return (
        <div className="header-container" style={{background: (mobile) && "white"}}>
            <LogoTitle {...{mobile}}/>
            {
                mobile ? 
                <ImCancelCircle 
                    color={mobile ? "black" : "white"}  
                    onClick={handleMobileMenuClick} /> : 
                <IoIosMenu 
                    color={mobile ? "black" : "white"}  
                    onClick={handleMobileMenuClick} />
            }
            
        </div>
    )
}

export default Header;