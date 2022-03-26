import React from 'react';

const Card = (props) => {
    const { name, price, img } = props.product;
    return (
        <div>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Card;