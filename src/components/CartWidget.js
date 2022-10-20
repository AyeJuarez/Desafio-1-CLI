import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import { Icon } from './styled-components/Icons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const CartWidget = () => {
    const { countItems } = useCartContext()

    return (
        <Icon className='cart' quantity={countItems()}>
            <span>{countItems() > 9 ? '9+' : countItems()}</span>
            <Link to={'/cart'}>

                <ShoppingCartIcon fontSize="large" />

            </Link>
        </Icon>
    )
}

export default CartWidget