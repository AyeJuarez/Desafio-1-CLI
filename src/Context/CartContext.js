import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems, "SOY LOS ITEMS DEL CARRITO")
    useEffect(() => {
        isInCart();
    }, [cartItems]);
    const isInCart = (itemId) => {
        let itemIndex = -1;
        let quantity = 1;
        let isIn = false;
        cartItems.forEach((e, index) => {
            if (e.item.id === itemId) {
                itemIndex = index;
                quantity = e.count;
                isIn = true;
            }
        });
        return [isIn, quantity, itemIndex];
    };
    const addItem = (item, qty) => {
        const [isIn, quantity, itemIndex] = isInCart(item.id);
        let count = qty;
        if (isIn === true) {
            count = count + quantity;
            setCartItems(cartItems.splice(itemIndex, 1));
        }
        setCartItems([...cartItems, { item, count }]);
    };
    return (
        <CartContext.Provider
            value={{ cartItems, addItem }}
        >
            {props.children}
        </CartContext.Provider>
    );
}
