import React, { useState, useEffect } from 'react';
import {BsFillHouseFill} from 'react-icons/bs';


const HomeOption = ({ option, text, homeAnswer,  handleHomeClick }) => {

    const [myStyle, setMyStyle] = useState({boxShadow: homeAnswer === option && "0px 0px 5px 3px #ACE1AF"});
    const [activeColor, setActiveColor] = useState("#B0C4DE")

    useEffect(() => {
        setMyStyle({boxShadow: homeAnswer === option && "0px 0px 5px 3px #ACE1AF"})
    }, [homeAnswer, option]);

    return (
        <div className="option" onClick={() => handleHomeClick(option)} style={myStyle}>
            <BsFillHouseFill size={60} color={activeColor} />
            <span className="home-size-text">{text}</span>
        </div>
    )
}

export default HomeOption;