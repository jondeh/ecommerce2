import React from 'react';
import LogoTitle from '../Utility/LogoTitle';
import { useLocation } from 'react-router-dom';

import '../../SCSS/Footer.scss';

const FooterHeader = () => {
    const location = useLocation();

    return (
        <div className="footer-header">
            <LogoTitle />
        </div>
    )
}

export default FooterHeader;