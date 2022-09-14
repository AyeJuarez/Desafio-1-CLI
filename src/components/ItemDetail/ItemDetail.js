import { ItemCount } from '../ItemCount'
import styles from './styles.module.css'

const ItemDetail = ({ productos }) => {
    const { img, title, id, stock, description } = productos
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
                <h2>Comprar</h2>
                <ItemCount stock={stock} id={id} />
            </div>
            <div id={styles['resume']}>
                <h2>Resumen</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <div id={styles['more-section']}>
                <h2>Contenido relacionado</h2>
            </div>
        </div>
    )
}

export default ItemDetail
