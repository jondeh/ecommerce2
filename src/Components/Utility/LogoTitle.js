import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const LogoTitle = ({ mobile }) => {
    const { push } = useHistory();
    const { mobileMenuVisible, setMobileMenuVisible } = useContext(AppContext);

    const handleLogoClick = () => {
        setMobileMenuVisible(false);
        push('/');
    }

    return (
        <h2 
            className="logo-title"
            style={{color: mobile ? "darkgrey" : "white"}}
            onClick={handleLogoClick}>
                <div><span>x</span>obrettij</div>
        </h2>
    );
};

export default LogoTitle;