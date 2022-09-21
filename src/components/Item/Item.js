import React from 'react'
import { Link } from 'react-router-dom'
import './styles.module.css'


const Item = ({data}) => {
  return (
    <div className='card-container' key={data.id}>
        <h4>{data.title}</h4>
        <div>
            <img className='img' src={data.img} alt="Hola" />
        </div>
        <p className='price'>{data.price} $</p>
        <Link to={`/detalles/${data.id}`}>
          <button className='button button-detail'>Ver mas detalles</button>
        </Link>
    </div>
  )
}
export default Item;