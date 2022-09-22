import React from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import {ItemCart} from '../ItemCart/ItemCart'

export const Cart = () => {
    const { cart, totalPrice } = CartContext();

    if (cart.length === 0){
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer Compras</Link>
            </>
        );
    }

    return (
        <>
        <h1>{cart.map(item => <ItemCart key={item.id} item={item} /> )}</h1>
        <p> Total: {totalPrice()}</p>
        </>
    );
}