import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../../context/UserContext';
import WebMenu from './WebMenu';
import { useHistory } from 'react-router-dom';
import '../../SCSS/WebAuth.scss';
import Auth from '../Pages/Auth';
import {IoMdArrowDropdown} from 'react-icons/io';

const WebAuth = () => {
    let id = "web-auth-id";

    const { user, logout } = useContext(UserContext);
    const { push } = useHistory();

    const handleEnter = () => {
        if (user) {
            let webMenu = document.getElementById(id);
            webMenu.classList.add("open");

        } 
        // else {
        //     let webMenu = document.getElementById("auth-container-id");
        //     webMenu.classList.add("open");
        // }
    };

    const handleLeave = () => {
        // if (user) {
            let webMenu = document.getElementById(id);
            webMenu.classList.remove("open");
        // } else {
        //     let webMenu = document.getElementById("auth-container-id");
        //     webMenu.classList.remove("open");
        // }
    };
    
    const handleSignIn = () => {
        handleLeave();
        push('/auth');
        // setWebAuthVisible(!webAuthVisible);
    };

    const handleAccount = () => {
        handleLeave();
    }

    const handleSeeMyPlan = () => {
        handleLeave();
        user ? push('/dashboard') : push('/customize'); 
        
    }

    const handleLogout = () => {
        let activeButton = document.activeElement;
        handleLeave();
        activeButton.blur();
        logout();
    };

    const webAuthData = [
        {text: user ? "see my plan" : "get started", onClick: handleSeeMyPlan},
        {text: "account", onClick: handleAccount},
        {text: "sign out", onClick: handleLogout},
    ];

    const webAuthStyle = {
        width: "60%",
    }

    return(
        <div className="web-auth-container">
            <Button
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={handleSignIn}
                id="web-sign-in" 
                variant="contained">
                {user ? user.email : "sign in"}
                <IoMdArrowDropdown />
            </Button>
            <Button
                onClick={handleSeeMyPlan}
                id="web-see-my-plan" 
                variant="contained">
                {user ? "see dashboard" : "see my plan"}
            </Button>
            <WebMenu {...{id, data: webAuthData, style: webAuthStyle}} />
            {/* <Auth /> */}
        </div>
    );
};

export default WebAuth;