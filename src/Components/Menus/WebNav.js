import React from 'react';
import { Button } from '@material-ui/core';
import {IoMdArrowDropdown} from 'react-icons/io';
import WebMenu from './WebMenu';
import '../../SCSS/WebNav.scss';
import { useHistory } from 'react-router-dom';
import { GiHummingbird, GiArchiveResearch } from 'react-icons/gi';
import { BiPackage } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const WebNav = () => {
    let id = "web-nav-id";
    const { push } = useHistory();

    const webNavStyle = {
        width: "125%",
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
        push('/customize')
    }
    const handleReviews = () => {
        handleLeave();

    }
    
    
    const webNavData = [
        {text: "get started", subText: "IT", onClick: handleGetStarted, image: <GiHummingbird color={accent} /> },
        {text: "see how it works", subText: "SEE", onClick: handleSeeHowItWorks, image: <GiArchiveResearch color={accent} /> },
        {text: "products", subText: "HOW", onClick: handleProducts, image: <BiPackage color={accent} /> },
        {text: "reviews", subText: "WORKS", onClick: handleReviews, image: <AiFillStar color={"gold"} /> },
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