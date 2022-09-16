import React, { createContext, useState } from 'react'


export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [products, setProducts] = useState([{
        id: 1,
        title: "Primer producto",
        qty: "0"
    }])

    const isInCart = (id) => {
        const found = products.find(item => item.id === id);
        return found;
    }

    const addItem = (item, qty) => {
        isInCart(item.id)
        ?
        setProducts(products.map((prod) => {
            if (prod.id === item.id){
                prod.qty += qty
            }
            return prod
        }))
        :
        setProducts([...products, {id: item.id, name: item.title, price: item.price, qty: qty}])
    }

    const removeItem = (id) => {
        setProducts(products.filter(item => item.id !== id))
    }

    const clearItem = () => {
        setProducts([])
    }
    return (
        <CartContext.Provider value={{products, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

