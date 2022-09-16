import styles from './styles.module.css'
import { CardButton } from '../CardButton'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const {
        id,
        img,
        title = 'Empty title',
        price = 0,
        description,
        stock = 0,
    } = props.data

    return (
        <>
            <div className={styles.container}>
                <div className={styles.product}>
                    <img src={img} alt={title} />
                    <div className={styles.info}>
                        <div className={styles.infoHeader}>
                            <span className={styles.stock}>{`${stock} unid. disponibles`}</span>
                            <span className={styles.price}>${price}</span>
                        </div>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.description}>{description}</p>
                        <Link to={`/products/detail/${id}`} className={styles['view-more']}>
                            <CardButton text='Ver más...' />
                        </Link>

                        <div href={`/products/detail/${id}`} className={styles['view-more']}>
                            <CardButton text='Añadir a la carrito' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item
