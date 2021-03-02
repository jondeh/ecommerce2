import React, { useState, useEffect } from 'react';


const HomeOption = ({ option, text, homeAnswer,  handleHomeClick }) => {

    const [myStyle, setMyStyle] = useState({background: homeAnswer === option && "lightgreen"});

    useEffect(() => {
        setMyStyle({background: homeAnswer === option && "lightgreen"})
    }, [homeAnswer, option]);

    return (
        <div className="option" onClick={() => handleHomeClick(option)} style={myStyle}>
            <span>{text}</span>
        </div>
    )
}

export default HomeOption;