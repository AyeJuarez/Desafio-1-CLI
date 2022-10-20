import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EmptyCart = () => {
    return (
        <EmptyCartContainer>
            <p>Ops! El carrito se encuentra vacio!</p>
            <Link to={'/'}>
                <div className='cta'>Ir a comprar</div>
            </Link>
        </EmptyCartContainer>
    )
}
export default EmptyCart

const EmptyCartContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 200px;
    object-fit: contain;
  }
  .cta {
    margin-top: 1rem;
    background-color: red;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
  }
`