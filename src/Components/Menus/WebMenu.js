import React from 'react';
import { Button } from '@material-ui/core';
import '../../SCSS/WebMenu.scss';

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
                >{button.text}
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