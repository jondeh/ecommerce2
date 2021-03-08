import React, { useState } from 'react';
import ProductOption from '../Utility/ProductOption';
import '../../SCSS/ProductQuestion.scss';
// import {FaLeaf} from '@material-ui/icons/';
import {FaLeaf} from 'react-icons/fa';
import {GiSpray} from 'react-icons/gi';


const ProductQuestion = ({ productAnswer, setProductAnswer }) => {
    const options = [
        {image: <FaLeaf size={30} color={'#ACE1AF'} />, description: "Natural solution inside and out."},
        {id: 1, image: [<GiSpray size={27} color={'#5072A7'} />, <FaLeaf size={25} color={'#ACE1AF'} />], description: "Natural inside with the strongest available treatment outside."},
        // {image: null, description: "Help! I need one professional treatment and then I can do it myself."},
    ]

    
    return (
        <div className="product-question-container">
            {options.map((e,i) => {
                const {id, image, description} = e
                return <ProductOption {...{id, image, description, option: i, productAnswer, setProductAnswer}} key={i} />
            })}
        </div>
    )
}

export default ProductQuestion;