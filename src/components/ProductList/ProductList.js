import React from 'react';
import Products from '../pages/Products';


const ProductList = ({ productos }) => {
    return (
        <div className="ProductList">
            {productos.map(productos => <Products key={productos.id} {...productos} />)}
        </div>
    )
}

export default ProductList