import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const { reset, chooseOne, item } = props;

    return (
        <div className='cart'>
            <h2>Selected Fragrances</h2>
            {
                cart.map(product => (
                    <div key={product.id} className='cart-list'>
                        <img src={product.img} alt="" />
                        <h4>{product.name}</h4>

                    </div>))
            }
            <button className='cart-btn' onClick={chooseOne}>Choose One For Me</button>
            <br />
            <button className='cart-btn' onClick={reset}>Reset</button>
            <div key={item.id} className='selected-item'>
                <h4>{item.name}</h4>
            </div >
        </div >
    );
};

export default Cart;