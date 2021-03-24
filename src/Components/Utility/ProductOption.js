import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const ProductOption = ({ id, image, description, option, productAnswer, setProductAnswer }) => {

    const [myStyle, setMyStyle] = useState({boxShadow: productAnswer === option && `0px 0px 5px 2px ${accent}`});

    const handleClick = () => {
        setProductAnswer(option)
    };

    useEffect(() => {
        setMyStyle({boxShadow: productAnswer === option && `0px 0px 5px 2px ${accent}`})
    }, [productAnswer]);

    return (
        <div className="option-container" onClick={handleClick} style={myStyle}>
            <div className="option-picture">
                {id ? 
                <div className="option-pic-row">
                    {image[0]}
                    <span>+</span>
                    {image[1]}
                </div> : image}
            </div>
            <div className="option-text">{description}</div>
        </div>
    )
}

export default ProductOption;