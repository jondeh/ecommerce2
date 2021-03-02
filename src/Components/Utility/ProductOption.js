import React, { useState, useEffect, useContext } from 'react';

import { AppContext } from '../../context/AppContext';

const ProductOption = ({ image, description, option, productAnswer, setProductAnswer }) => {

    const [myStyle, setMyStyle] = useState({background: productAnswer === option && "lightgreen"});

    const handleClick = () => {
        setProductAnswer(option)
    };

    useEffect(() => {
        setMyStyle({background: productAnswer === option && "lightgreen"})
    }, [productAnswer]);

    return (
        <div className="option-container" onClick={handleClick} style={myStyle}>
            <div className="option-picture">{image}</div>
            <div className="option-text">{description}</div>
        </div>
    )
}

export default ProductOption;