import React, { useState } from 'react';

import Option from '../Utility/Option';

import '../../SCSS/ProductQuestion.scss';


const ProductQuestion = () => {
    const options = [
        {image: null, description: "Natural solution safe for pets and kids."},
        {image: null, description: "Natural inside with the strongest available treatment outside."},
        {image: null, description: "Real problem. I need one professional treatment and then I can do it myself."},
    ]

    
    return (
        <div className="product-question-container">
            {options.map((e,i) => {
                const {image, description} = e
                return <Option {...{image, description, option: i}} key={i} />
            })}
        </div>
    )
}

export default ProductQuestion;