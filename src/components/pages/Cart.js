/*import React, { useContext } from 'react'
import { CartContext } from '../../Context/useContext'


const Cart = () => {
    const { products, removeItem, clearItems } = useContext(CartContext);


    return (
        <div>
            {
                products.map((item)=>{
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <h2>{item.qty}</h2>
                        <h4 onClick={() => removeItem(item.id)}>Borrar producto</h4>
                    </div>
                })
            }
            <h4 onClick={() => clearItems()}>vaciar Carrito</h4>
        </div>
    )
}

export default Cart */