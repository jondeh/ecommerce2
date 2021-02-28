import React, { useState, useEffect, useContext } from 'react';

import { AppContext } from '../../context/AppContext';

const Option = ({ image, description, option }) => {
    const { 
        currentOption, 
        setCurrentOption 
    } = useContext(AppContext);

    const [forceLoad, setForceLoad] = useState(null);

    const [myStyle, setMyStyle] = useState({background: currentOption === option && "lightgreen"});

    const handleClick = () => {
        setCurrentOption(option)
        setForceLoad(null)
    };

    useEffect(() => {
        setMyStyle({background: currentOption === option && "lightgreen"})
    }, [currentOption]);

    return (
        <div className="option-container" onClick={handleClick} style={myStyle}>
            <div className="option-picture">{image}</div>
            <div className="option-text">{description}</div>
        </div>
    )
}

export default Option;