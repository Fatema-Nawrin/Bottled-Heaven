import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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
    return (
        <div className='container'>
            <div className="products-container">
                {
                    products.map(product => <Card
                        product={product}
                        key={product.id}></Card>)
                }
            </div>
            <div className="cart-container"></div>

        </div>
    );
};

export default Shop;