import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, name } = props;
    let total = 0;
    for (const subject of cart) {
        total += subject.cost;

    }
    let totalName = '';
    for (const subject of name) {
        totalName = subject.subject;
    }

    return (
        <div className="cart-container">
            <h3 >Summery </h3>
            <h4>Subject Added: {props.cart.length}</h4>
            <h4>Total Cost : {total}</h4>
            <h4>{totalName}</h4>
        </div>
    );
};

export default Cart;