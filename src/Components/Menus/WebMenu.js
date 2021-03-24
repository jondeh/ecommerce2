import React from 'react';
import { Button } from '@material-ui/core';
import '../../SCSS/WebMenu.scss';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const WebMenu = ({ id, data, style }) => {

    const handleEnter = () => {
        let webMenu = document.getElementById(id);
        webMenu.classList.add("open");
    };

    const handleLeave = () => {
        let webMenu = document.getElementById(id);
        webMenu.classList.remove("open");
    };

    const mappedMenu = data.map((button, i) => {
        return (

        <button 
            variant="contained" 
            key={i}
            onClick={button.onClick}
            >
                <div className="web-menu-button-text">
                    <span className="web-menu-text">{button.text}</span>
                    {button.subText && <span className="web-menu-subtext">{button.subText}</span>}
                    
                </div>
                
                {button.image && button.image}
        </button>

        )
    })

    return (
        <div
            className="web-menu-container" 
            style={style ? style : null} 
            id={id}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}>
            {mappedMenu}
        </div>
    );
};

export default WebMenu;