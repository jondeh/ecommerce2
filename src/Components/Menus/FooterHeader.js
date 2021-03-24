import React from 'react';
import Logo from '../Utility/Logo';
import { useHistory, useLocation } from 'react-router-dom';
import '../../SCSS/Footer.scss';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const FooterHeader = ({ mobile }) => {
    const location = useLocation();

    const styles = {
        // background: mobile ? "#5D76A9" : "transparent"
        background: mobile ? primary : location.pathname === '/' ? "transparent" : location.pathname === '/customize' ? altBlue : null,
    }

    return (
        <div className="footer-header" style={styles}>
            <Logo />
        </div>
    )
}

export default FooterHeader;