import React from 'react';
import Logo from '../Utility/Logo';
import { useHistory, useLocation } from 'react-router-dom';

import '../../SCSS/Footer.scss';

const FooterHeader = ({ mobile }) => {
    const location = useLocation();

    const styles = {
        // background: mobile ? "#5D76A9" : "transparent"
        background: mobile ? "#5D76A9" : location.pathname === '/' ? "transparent" : location.pathname === '/customize' ? "#B0C4DE" : null,
    }

    return (
        <div className="footer-header" style={styles}>
            <Logo />
        </div>
    )
}

export default FooterHeader;