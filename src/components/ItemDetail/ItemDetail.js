import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/useContext'
import { ItemCount } from '../ItemCount'
import styles from './styles.module.css'
 


const ItemDetail = ({ productos }) => {
    const [add, setAdd] = useState(false)
    
    const {addItem} = useContext(CartContext)

    const { img, title, description } = productos
    return (
        <div className={styles.container}>
            <div className={styles['hero-header']}>
                <img src={img} alt='' />
            </div>

            <div id={styles['heading-info']}>
                <h1>{title}</h1>
                <span className={styles.title}>de {title}</span>
            </div>
            <div id={styles['buy-section']}>
                <h2>Agregar</h2>
                {
                    add ?
                    <div>Agregado! </div>
                    : <ItemCount stock={10} initial={1} addItem={addItem}/>
                }
                
            </div>
            <div id={styles['resume']}>
                <h2>Resumen</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <div id={styles['more-section']}>
                <h2>Contenido relacionado</h2>
            </div>
            <Link to="/cart">
                Finalizar Comprar
            </Link>
        </div>
    )
}

export default ItemDetail
