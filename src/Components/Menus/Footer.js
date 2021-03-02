import React from 'react';
import LogoTitle from '../Utility/LogoTitle';
// import { MenuColumn } from '../MobileMenu';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import '../../SCSS/Footer.scss';

const footColumn1 = ["how it works", "ingredients", "your lawn", "weed control", "free tools"]
const footColumn2 = ["about us", "guarantee", "privacy policy", "terms of use", "our mission"]

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-header"><LogoTitle /></div>
            
            <div className="footer-nav-bar">
                buy - login - help
            </div>
            <div className="footer-columns">
                {/* <MenuColumn info={footColumn1} align="left" />
                <MenuColumn info={footColumn2} align="right" /> */}
            </div>
            <div className="footer-blog-nav">
                <div className="footer-blog-nav-picture"></div>
                <div className="footer-blog-nav-description">natural lawn tips and tricks</div>
            </div>
            <div className="social-media-nav">
                <FaFacebookF size={35} />
                <FaInstagram size={35} />
                <FaTwitter size={35} />
            </div>
        </div>
    )
}

export default Footer;