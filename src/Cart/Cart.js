import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, name } = props;
    let total = 0;
    for (const subject of cart) {
        total += subject.cost;
    }
    return (
        <div className="cart-container">
            <h3 >Summery </h3>
            <h4>Subject Added: {props.cart.length}</h4>
            <h4>Total Cost : {total}</h4>
            {
                name.map(data => <h5> Selected Subject: {data.subject}</h5>)
            }
        </div>
    );
};

export default Cart;