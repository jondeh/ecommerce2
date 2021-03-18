import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as ImportedComponent} from '../../data/logo/logo-letters.svg';
import '../../SCSS/Logo.scss';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const StyledSVG = styled(ImportedComponent)`
    display: block;
    margin: auto;
    width: 7em;
    height: 3em;
    cursor: pointer;`

const Logo = () => {
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