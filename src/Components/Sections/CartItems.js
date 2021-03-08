import React, { useContext } from 'react';
import {AppContext} from '../../context/AppContext';

import '../../SCSS/CartItems.scss';

const CartItems = () => {
    const { cart } = useContext(AppContext);

    const mappedCart = cart.map((item, i) => {
        return (
            <div className='cart-item'>
                <div className="cart-div">
                    <div className="item-image">
                        {item.image}
                    </div>
                    <div className="cart-item-name">
                        <span className="item-name">{item.name}</span>
                        <span className="item-description">{item.description}</span>
                    </div>
                </div>
                <span>${item.price}</span>
            </div>
        )
    })
    return (
        <div className="cart-items-container">
            {mappedCart}
        </div>
    )
}

export default CartItems;