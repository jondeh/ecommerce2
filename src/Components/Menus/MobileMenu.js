import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserContext } from '../../context/UserContext';

import '../../SCSS/MobileMenu.scss';
import Header from './Header';
import MMTop from './MMTop';
import MMMiddle from './MMMiddle';
import MMBottom from './MMBottom';

const MobileMenu = () => {
    const { mobileMenuVisible } = useContext(AppContext);
    const { user } = useContext(UserContext);

    // console.log(mobileMenuVisible)

    return (
        <div className={`mobile-menu-${mobileMenuVisible}`}>
            <Header {...{mobile: true}}/>
            <MMTop />
            <MMMiddle />
            <MMBottom {...{user}}/>
        </div>
    )
}

export default MobileMenu;