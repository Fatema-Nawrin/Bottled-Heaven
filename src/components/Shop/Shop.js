import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
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