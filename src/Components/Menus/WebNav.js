import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import {IoMdArrowDropdown} from 'react-icons/io';
import WebMenu from './WebMenu';
import '../../SCSS/WebNav.scss';
import { useHistory } from 'react-router-dom';
import { GiHummingbird, GiArchiveResearch } from 'react-icons/gi';
import { BiPackage } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { AppContext } from '../../context/AppContext';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const WebNav = () => {
    let id = "web-nav-id";
    const {  
        handleLeave,
        handleSeeHowItWorks,
        handleProducts,
        handleGetStarted,
        handleReviews,
        webNavData,
    } = useContext(AppContext);

    const { push } = useHistory();

    const webNavStyle = {
        width: "100%",
    }

    const handleEnter = () => {
        let webMenu = document.getElementById(id);
        webMenu.classList.add("open");
    };


    return (
        <nav className="web-nav">
            <Button
                id="web-nav-bar"
                onMouseEnter={() => handleEnter()} 
                onMouseLeave={() => handleLeave(id)} 
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
            <WebMenu {...{id, data: webNavData(id), style: webNavStyle}} />
        </nav>
    );
};

export default WebNav;