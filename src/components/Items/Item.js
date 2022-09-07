import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, title, img, description }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={img} alt={title} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    {description}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={'/product/detail/'+ id}>
                    <button>ver detalles</button>
                </Link>
            </footer>
        </article>
    )
}

export default Item