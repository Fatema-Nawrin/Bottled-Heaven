import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    const [cart, setCart] = useState([])
    const addInCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const reset = () => {
        setCart([])
        setItem([])
    }
    const [item, setItem] = useState([])
    const chooseOne = () => {
        let choosenProduct = cart[Math.floor(Math.random() * cart.length)]
        setItem(choosenProduct);
    };
    return (
        <div className='container'>
            <div className="products-container">
                {
                    products.map(product => <Card
                        product={product}
                        key={product.id}
                        addInCart={addInCart}></Card>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    reset={reset}
                    chooseOne={chooseOne}
                    item={item}></Cart>
            </div>
        </div>
    );
};

export default Shop;