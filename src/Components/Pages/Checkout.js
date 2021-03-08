import React from 'react';
import CheckoutWithStripe from '../Utility/CheckoutWithStripe';
import '../../SCSS/Checkout.scss';

const Checkout = () => {
    return (
        <div className="checkout-container">
            <CheckoutWithStripe />
        </div>
    )
}

export default Checkout;