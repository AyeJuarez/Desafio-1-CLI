import './ItemCart.css';
import React from 'react';
import { CartContext } from '../../Context/useContext';

export const ItemCart = ({item}) => {

    const [removeItem] = CartContext();

    return (
        <div className='itemCart'>
            <img src={item.img} alt={item.title}/>
            <div>
                <p>{item.title}</p>
                <p>Cantidad: {item.qty}</p>
                <p>Precio unid: {item.price}</p>
                <p>Subtotal: ${item.qty * item.price} </p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}


