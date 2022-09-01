import React, { useState, useEffect } from 'react'
import Item from './Item';


const ItemList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch("productos.json");
        const product = await response.json();
        return product;
    };

    useEffect(() => {
        getProducts().then((product) => setProducts(product));
    }, []);

    return (
        <div>
            {products.map(producto => <Item key={producto.id} producto= {producto} />)}
        </div>
    )
}

export default ItemList

/* const GetItemList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemList);
        }, 2000);
    });
}

GetItemList().then((ItemList) => console.log(ItemList));  */