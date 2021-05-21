import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as ImportedComponent} from '../../data/logo/logo-letters.svg';
import '../../SCSS/Logo.scss';
import { useHistory, location } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import logo from '../../data/logo/jitterbox-logo-2.png';
import hummingbird from '../../data/logo/jitterbird.png';

// import logo from '../../data/logo/hummingbird.png';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;


let myLogo = document.getElementById("jitterbo");

const StyledSVG = styled(ImportedComponent)`
    display: block;
    margin: auto;
    width: 7em;
    height: 3em;
    cursor: pointer;
`

const Logo = ({ type }) => {
    const { push } = useHistory();
    const { mobileMenuVisible, setMobileMenuVisible, closeMobileMenu } = useContext(AppContext);

    const handleLogoClick = () => {
        setMobileMenuVisible(false);
        closeMobileMenu();
        push('/');
    }

    console.log("myLogo", myLogo);

    return (
        <div className="logo-container" onClick={handleLogoClick}>
            <picture>
                {/* <source 
                    media="(max-width: 10%)"
                    srcset={myLogo}></source> */}
                {/* <img src={type === "picture" ? hummingbird : logo} alt="" /> */}
                <img src={hummingbird} alt="" />
            </picture>
        </div>
    )
}

export default Logo;