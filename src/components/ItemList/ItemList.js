import styled from 'styled-components'
import Item from '../Item/Item'
import { Container } from '../styled-components/Container'

const ItemList = ({ products }) => {
    return (
        <ProductContainer>
            {products?.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </ProductContainer>
    )
}
export default ItemList

const ProductContainer = styled(Container)`
  gap: 1rem;
  justify-content: center;
  align-items: stretch;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  } `