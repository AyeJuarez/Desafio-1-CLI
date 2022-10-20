import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail/ItemDetail'
import Spinner from '../components/Spinner'
import { Container } from '../components/styled-components/Container'
import { itemCollection } from '../services/producto'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Esta funcion getById es la funcion que ejecuta logica de firebase
        itemCollection.getById(id).then((data) => {
            setLoading(false)
            setProduct(data)
        })
    }, [id])

    return (
        <>
            {loading ? (
                <Container>
                    <Spinner />
                </Container>
            ) : (
                <ItemDetail product={{ id, ...product }} />
            )}
        </>
    )
}

export default ItemDetailContainer

