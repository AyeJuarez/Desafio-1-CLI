import styled from 'styled-components'
import ItemCount from '../itemCount/itemCount'
import { useCartContext } from '../../Context/CartContext'
import { formatter } from '../../utils/utils'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ItemDetail = ({ product }) => {
    const { addItem } = useCartContext()

    function addProductToCart(product, quantity) {
        const notify = () => toast(`Producto ${product.title} añadido!`)
        notify()
        addItem(product, quantity)
    }

    return (
        <ProductContainer>
            <ToastContainer />
            <ProductImageContainer id='image-area'>
                <img
                    src={`${product?.img}`}
                    alt={product?.tinyDescription}
                />
            </ProductImageContainer>
            <div id='info-area'>
                <ProductInfo id='info-area' style={{ gridArea: 'info-area' }}>
                    <h2 className='title'>{product?.title?.toUpperCase()}</h2>
                    <span className='price'>{`${formatter.format(product?.price)}`}</span>
                    <hr />
                    <p>{product?.description}</p>
                    <p className='info'>{`STOCK: ${product?.stock}`}</p>
                </ProductInfo>
                <hr />
                <ItemCount addProductToCart={addProductToCart} product={product} />
            </div>

        </ProductContainer>
    )
}
export default ItemDetail

const ProductContainer = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: 1fr;
  grid-template-areas:
    'image-area'
    'info-area'
    'sinopsis-area';

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'image-area info-area'
      'image-area info-area'
      'sinopsis-area sinopsis-area';
  }
`
const ProductImageContainer = styled.div`
  grid-area: image-area;
  max-width: 250px;
  margin: 100px;
  transition: transform 0.3s ease;
  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    :hover {
      transform: scale(1.4) translateY(10%);
    }
  }
`
const ProductInfo = styled.div`
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: #333;
  

  .title {
    font-weight: 300;
    font-family: 'Inter';
  }
  .price {
    font-size: 2rem;
    font-weight: bold;
  }
  .info {
    font-style: italic;
    font-weight: bold;
    color: inherit;
  }
`


