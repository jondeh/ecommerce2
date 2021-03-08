import React, { useState, useEffect } from 'react';

const SprayerOption = ({ sprayerAnswer, setSprayerAnswer, option, text}) => {
    const [myStyle, setMyStyle] = useState({background: sprayerAnswer === option && "#ACE1AF"});

    const handleClick = () => {
        setSprayerAnswer(option)
    };

    useEffect(() => {
        setMyStyle({background: sprayerAnswer === option && "#ACE1AF"})
    }, [sprayerAnswer]);

    return (
        <div className="option" style={myStyle}>
            <div onClick={handleClick} className="option-image"> {option} </div>
            <div onClick={handleClick} className="option-text"> {text} </div>
        </div>
    )
}

export default SprayerOption;