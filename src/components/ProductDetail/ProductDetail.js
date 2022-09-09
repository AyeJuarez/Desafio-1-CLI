import React from 'react'
import './ProductDetail.css';
import ItemCount from '../ItemCount/ItemCount'

const ProductDetail = ({ product: {title, category, description, img, stock} }) => {
    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} ${title}`);
    };

    return (

        <div className='col-md-3 mb-4'>
            <h3>{title}</h3>
            <h4>{category}</h4>
            <h5>{description}</h5>
            <img src={img} alt="" height="250px" />
            <ItemCount stock={stock} onAdd={handleOnAdd} />
        </div>


    )
}

export default ProductDetail