import React from 'react'
import style from '../ItemListContainer/style.css'
import Item from './Item'


const ItemList = ({ productos }) => {
    return (
        <div className={style.ItemList}>
            {productos.map(productos => <Item key={productos.id} {...productos} />)}
        </div>
    )
}

export default ItemList