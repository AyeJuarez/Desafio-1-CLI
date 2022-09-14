import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const getProduct = async () => {
        const response = await fetch(`../productos.json`);
        const data = await response.json()
        return data.record
    }

    useEffect(() => {
        setLoading(true)
        getProduct().then((data) => {
            const filtrado = data.filter((item) => item.id === Number(id))
            setProduct(filtrado[0])
            setLoading(false)
        })
    }, [id])

    return (
        <>
            {loading && <Loader></Loader>}
            {!loading && <ItemDetail product={product} />}
        </>
    )
}
