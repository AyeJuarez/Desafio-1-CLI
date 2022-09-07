import React from "react";
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product: {title, category, description, img, stock} }) => {
    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} ${title}`);
    };

    return (
        <div>
            <h1>{title}</h1>
            <h2>{category}</h2>
            <h2>{description}</h2>
            <img src={img} alt="" />
            <ItemCount stock={stock} onAdd={handleOnAdd} />
        </div>

    );
};

export default ItemDetail;