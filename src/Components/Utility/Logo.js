import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as ImportedComponent} from '../../data/logo/logo-letters.svg';
import '../../SCSS/Logo.scss';
import { useHistory, location } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
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

const Logo = ({  }) => {
    const { push } = useHistory();
    const { mobileMenuVisible, setMobileMenuVisible, closeMobileMenu } = useContext(AppContext);

    const handleLogoClick = () => {
        setMobileMenuVisible(false);
        closeMobileMenu();
        push('/');
    }

    return (
        <div className="logo-container" onClick={handleLogoClick}>
            <StyledSVG />
        </div>
    )
}

export default Logo;