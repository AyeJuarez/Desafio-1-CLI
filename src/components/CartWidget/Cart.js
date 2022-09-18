import React from 'react'
import { useCartContext } from '../../Context/CartContext'

export const Cart = () => {
    const { cart } = useCartContext()
    return (
        <h1>{cart.map(item => <h1>{item.title}</h1>)}</h1>
    )
}