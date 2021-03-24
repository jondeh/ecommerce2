import React, { useState, useEffect } from 'react';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const SprayerOption = ({ sprayerAnswer, setSprayerAnswer, option, text}) => {
    const [myStyle, setMyStyle] = useState({background: sprayerAnswer === option && accent});

    const handleClick = () => {
        setSprayerAnswer(option)
    };

    useEffect(() => {
        setMyStyle({background: sprayerAnswer === option && accent})
    }, [sprayerAnswer]);

    return (
        <div className="option" style={myStyle}>
            <div onClick={handleClick} className="option-image"> 
            
            </div>
            <div onClick={handleClick} className="option-text"> {text} </div>
        </div>
    )
}

export default SprayerOption;