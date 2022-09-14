import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList.js'
import styles from './style.module.css'
import React from 'react'
import { getProductosByCategory, getProductosByTitle } from '../ProductDetail/asyncmock'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ data }) => {
    // TODO Este componente debe tener un titulo que indique la o las categorias que este mostrando
    const [filtered, setFiltered] = useState(data.items)
    const { titleId, categoryId } = useParams()


    useEffect(() => {

        let filtrados = data.items

        if (!titleId && !categoryId) {
            getProductosByCategory().then(productos => {
                filtrados = filtrados.filter((product) => product.categoryId === true)

            })
        }
        else if (titleId) {
            getProductosByTitle(titleId).then(productos => {
                filtrados = filtrados.filter((product) => product.titleId === titleId)

            })
        }

        setFiltered(filtrados)
    }, [titleId, data, categoryId])


return (
    <section className={styles['item-list']}>
        <div className={styles.container}>
            {/* Renderizado condicional de un loading */}
            <div className={styles.items}>
                <ItemList items={filtered} />
            </div>
        </div>
    </section>
)
}

export default ItemListContainer
