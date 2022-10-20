import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList/ItemList'
import Spinner from '../components/Spinner'
import { Container } from '../components/styled-components/Container'
import { itemCollection } from '../services/producto'

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function handleGetProducts() {
        if (!categoryId) {
            const response = await itemCollection.getAll()
            return response
        }
        const items = await itemCollection.getByCategory(categoryId)
        return items
    }

    useEffect(() => {
        handleGetProducts().then((data) => {
            setLoading(false)
            setProducts(data)
        })
    }, [categoryId])

    return (
        <>
            
            {categoryId && <h1>{categoryId[0].toUpperCase() + categoryId.slice(1)}</h1>}
            {loading ? (
                <Container>
                    <Spinner />
                </Container>
            ) : (
                <ItemList products={products} />
            )}
        </>
    )
}

export default ItemListContainer

