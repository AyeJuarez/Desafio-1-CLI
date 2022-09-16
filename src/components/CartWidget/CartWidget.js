import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/useContext'

const CartWidget = () => {

    const {products} = useContext(CartContext)
    let itemsInCart = 0;

    products.map((item)=> {
        itemsInCart = itemsInCart + item.qty;
    })

    return (
        <><div className='itemsInCart'>
            {itemsInCart}
        </div><div className={styles.cart}>
                <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
            </div></>
    )
}

export default CartWidget
