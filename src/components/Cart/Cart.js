import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const { reset, chooseOne, item } = props;
    console.log(item);
    console.log(item.length);

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
            <div key={item.id} className={item.length === 0 ? 'hidden-item' : 'visible-item'}>
                <h3>Chosen One:</h3>
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
            </div>



        </div >
    );
};

export default Cart;