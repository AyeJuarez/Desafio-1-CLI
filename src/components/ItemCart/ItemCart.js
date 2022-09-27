import './ItemCart.css';
import React from 'react';


export const ItemCart = ({producData}) => {


    return (
        <div className='itemCart'>
            <img src={producData.img} alt={producData.title}/>
            <div>
                <p>{producData.title}</p>
                <p>Stock: {producData.stock}</p>
                <p>Precio unid: {producData.price}</p>
                
            </div>
        </div>
    )
}


