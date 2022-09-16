
/*import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' */
import ItemDetail from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader'

const ItemDetailContainer = () => {

    const productList = document.querySelector("product-list");

    const generateProductos = (data) => {
        data.productos.forEach(product => {
            const newProductDiv = document.createElement('div');

            newProductDiv.classList.add("px-6", "pt-4", "pb-2");

            const productHTML = `
        <p>${product.title}</p>
        <p>${product.description}</p>
        <p>${product.img}</p>`;

            newProductDiv.innerHTML = productHTML;

            productList.appendChild(newProductDiv);
        });
    };

    fetch("/productos.json")
        .then(response => response.json())
        .then(data => generateProductos(data))


    return (
        <>
            <Loader></Loader>
            { <ItemDetail />}
        </>
    )
}

export default ItemDetailContainer
