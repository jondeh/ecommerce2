import React, { useState, useContext } from 'react';

import '../../SCSS/CartCost.scss';
import { AppContext } from '../../context/AppContext';

const CartCost = () => {
    const { subTotal, setSubTotal, tax, setTax } = useContext(AppContext);
    // const [subTotal, setSubTotal] = useState(35);
    // const [tax, setTax] = useState((subTotal * .0485).toFixed());

    return (
        <div className="cart-cost-container">
            <div className="money">
                <div>Subtotal</div>
                <div>${subTotal}</div>
            </div>
            <div className="money">
                <div>Shipping</div>
                <div>Free</div>
            </div>
            <div className="money">
                <div>Sales Tax</div>
                <div>${tax}</div>
            </div>
            <div className="money total">
                <div>Total</div>
                <div>${+subTotal + +tax}</div>
            </div>
        </div>
    )
}

export default CartCost;