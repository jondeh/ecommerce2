import React from 'react';
import LogoTitle from '../Utility/LogoTitle';
// import { MenuColumn } from '../MobileMenu';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import '../../SCSS/Footer.scss';
import FooterHeader from './FooterHeader';

const footColumn1 = ["how it works", "ingredients", "your lawn", "weed control", "free tools"]
const footColumn2 = ["about us", "guarantee", "privacy policy", "terms of use", "our mission"]

const Footer = () => {
    return (
        <div className="footer-container">
            {/* <FooterHeader /> */}
            
            <div className="footer-nav-bar">
                <button>buy</button>
                <button>login</button>
                <button>help</button>
            </div>
            <FooterHeader />
            <div className="footer-columns">
                {/* <MenuColumn info={footColumn1} align="left" />
                <MenuColumn info={footColumn2} align="right" /> */}
            </div>
            <div className="footer-blog-nav">
                <div className="footer-blog-nav-picture"></div>
                {/* <div className="footer-blog-nav-description">natural lawn tips and tricks</div> */}
            </div>
            <div className="social-media-nav">
                <FaFacebookF color={"white"} />
                <FaInstagram color={"white"} />
                <FaTwitter color={"white"} />
            </div>
        </div>
    )
}

export default Footer;