import React, { useState } from 'react';
import ProductOption from '../Utility/ProductOption';
import '../../SCSS/ProductQuestion.scss';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';


const ProductQuestion = ({ productAnswer, setProductAnswer }) => {
    const options = [
        {image: <ChildFriendlyIcon />, description: "Natural solution safe for pets and kids."},
        {image: null, description: "Natural inside with the strongest available treatment outside."},
        {image: null, description: "Real problem. I need one professional treatment and then I can do it myself."},
    ]

    
    return (
        <div className="product-question-container">
            {options.map((e,i) => {
                const {image, description} = e
                return <ProductOption {...{image, description, option: i, productAnswer, setProductAnswer}} key={i} />
            })}
        </div>
    )
}

export default ProductQuestion;