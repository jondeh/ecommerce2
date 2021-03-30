import React, { useState } from 'react';
import CartItems from '../Sections/CartItems';
import CartCost from '../Sections/CartCost';
// import StripeCheckout from 'react-stripe-checkout';
import { Button } from '@material-ui/core';
import '../../SCSS/Cart.scss';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import AddOns from '../Sections/AddOns';

const Cart = () => {
    const [priceId, setPriceId] = useState('price_1IR7TAL0ktef83td1e9vzgH0')
    const stripe = useStripe();

    const createCheckoutSession = () => {
        // let newPriceId = JSON.stringify(priceId)
        console.log("CREATE CHECKOUT SESSION FRONTEND: ", priceId)
        return axios.post('/create-checkout-session', {
            priceId
        }).then((result) => {
            console.log("result1", result)
            console.log("result2", result.data)
            console.log("result3", result.data.sessionId)
            return result.data
        }).catch(err => console.log(err))
    };

    const handleSessionClick = () => {
        createCheckoutSession().then((data) => {
            console.log("redirect", data)
            stripe.redirectToCheckout({sessionId: data.sessionId})
        })
    };



    return (
        <div className="cart-container">
            {/* <div className="cart-titles">
            </div> */}
            <div className="cart-body">
                <div className="cart-main">
                <h3>cart</h3>
                    {/* <h3>Cart</h3> */}
                    <CartItems />
                    <div className="cost-button-container">
                        <CartCost />
                        <Button 
                            onClick={handleSessionClick} variant="contained"><span>CHECKOUT</span>
                        </Button>
                    </div>
                </div>
                <div className="cart-secondary">
                    <h3>add-ons</h3>
                    <AddOns />
                </div>
            </div>
        </div>
    )
}

export default Cart;