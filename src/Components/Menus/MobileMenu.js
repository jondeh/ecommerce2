import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserContext } from '../../context/UserContext';
import Auth from '../Pages/Auth';

import '../../SCSS/MobileMenu.scss';
import Header from './Header';
import MMTop from './MMTop';
import MMMiddle from './MMMiddle';
import MMBottom from './MMBottom';
import FooterHeader from './FooterHeader';

const MobileMenu = () => {
    let id = "mm-menu"
    const { mobileMenuVisible, mobileAuthVisible } = useContext(AppContext);
    const { user } = useContext(UserContext);

    // console.log(mobileMenuVisible)

    return (
        <div id="mobile-menu" className="mobile-menu">
            <Header {...{mobile: true}}/>
            {/* <div className="mobile-menu-body">
                {
                    mobileAuthVisible ? <Auth /> : 
                    <div className="body2">
                        <div>Hello</div>
                        <MMBottom {...{user}} />
                    </div>
                }   
                <Auth {...{mobile: true, id}}/>
                <div id="mmbody" className="body2">
                    <MMBottom {...{user}} />
                </div>
            </div> */}
            
            {/* {
                mobileAuthVisible ? <Auth /> :  */}
                <>
                    <MMTop />
                    <MMMiddle />
                    <MMBottom {...{user}}/>
                </>
            {/* } */}
            {/* <Auth /> */}
            <FooterHeader {...{mobile: true}}/>
        </div>
    )
}

export default MobileMenu;