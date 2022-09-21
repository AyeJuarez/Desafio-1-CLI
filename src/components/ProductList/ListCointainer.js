import React from 'react'
import { useEffect, useState } from 'react'
import { getProductos, getProductosByCategory, getProductosByTitle } from '../ProductDetail/asyncmock'
import { useParams } from 'react-router-dom'
import ProductList from './ProductList'
import Loader from '../Loader/Loader'



const ListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false)
    const { titleId, categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        if (!titleId && !categoryId) {
            getProductos().then(productos => {
                setProductos(productos)
                setLoading(false)
            })
        }
        else if (titleId) {
            getProductosByTitle(titleId).then(productos => {
                setProductos(productos)
                setLoading(false)
            })
        }

        else {
            getProductosByCategory(categoryId).then(productos => {
                setProductos(productos)
                setLoading(false)
            })
        }

    }, [titleId, categoryId])

    return (
        <div>
            {loading ? < Loader /> : <ProductList productos={productos} />}
        </div>
    )
}

export default ListContainer