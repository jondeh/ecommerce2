import React from 'react';
import { Button } from '@material-ui/core';
import {IoMdArrowDropdown} from 'react-icons/io';
import WebMenu from './WebMenu';
import '../../SCSS/WebNav.scss';
import { useHistory } from 'react-router-dom';

const WebNav = () => {
    let id = "web-nav-id";
    const { push } = useHistory();

    const webNavStyle = {
        width: "150%",
    }

    const handleEnter = () => {
        let webMenu = document.getElementById(id);
        webMenu.classList.add("open");
    };

    const handleLeave = () => {
        let webMenu = document.getElementById(id);
        webMenu.classList.remove("open");
    };

    const handleSeeHowItWorks = () => {
        handleLeave();
        push('/how-to');
    }
    const handleProducts = () => {
        handleLeave();

    }
    const handleGetStarted = () => {
        handleLeave();
        
    }
    const handleReviews = () => {
        handleLeave();

    }
    
    
    const webNavData = [
        {text: "see how it works", onClick: handleSeeHowItWorks},
        {text: "products", onClick: handleProducts},
        {text: "get started", onClick: handleGetStarted},
        {text: "reviews", onClick: handleReviews},
    ];

    return (
        <nav className="web-nav">
            <Button
                id="web-nav-bar"
                onMouseEnter={handleEnter} 
                onMouseLeave={handleLeave} 
                variant="contained">
                more
                { }
                <IoMdArrowDropdown />
            </Button>
            {/* <Button 
                onMouseEnter={handleHover} 
                variant="contained">
                learn
                {' '}
                <IoMdArrowDropdown />
            </Button> */}
            <WebMenu {...{id, data: webNavData, style: webNavStyle}} />
        </nav>
    );
};

export default WebNav;