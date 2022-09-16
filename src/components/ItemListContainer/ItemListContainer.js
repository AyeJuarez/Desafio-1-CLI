import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList.js'
import Loader from '../Loader/Loader.js'
import React from 'react'


const ItemListContainer = ({ categoryId, titleId }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch("/productos.json")
            .then(response => response.json())
            .then(respJSON => {console.log(respJSON.results);setItems(respJSON.results);setLoading(false);})
            .catch(error => console.log('Error', error))
        }, 2000)
    },[categoryId, titleId])

return (
    <div>
        <h1>{titleId}</h1>
        {
            loading ? <Loader></Loader> : <ItemList items={items} />
        }
    </div>
)
}

export default ItemListContainer
