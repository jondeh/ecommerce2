import React, { useState, useContext } from 'react';

import '../../SCSS/CartCost.scss';
import { AppContext } from '../../context/AppContext';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const CartCost = () => {
    const { subTotal, setSubTotal, tax, setTax } = useContext(AppContext);
    // const [subTotal, setSubTotal] = useState(35);
    // const [tax, setTax] = useState((subTotal * .0485).toFixed());

    return (
        <div className="cart-cost-container">
            <div className="money">
                <span>Subtotal</span>
                <span>${subTotal}</span>
            </div>
            <div className="money">
                <span>Shipping</span>
                <span style={{color: accent}}><strong>Free</strong></span>
            </div>
            <div className="money">
                <span>Sales Tax</span>
                <span>${tax}</span>
            </div>
            <div className="money total">
                <span style={{color: "black"}}>Total</span>
                <span style={{color: "black"}}>${+subTotal + +tax}</span>
            </div>
        </div>
    )
}

export default CartCost;