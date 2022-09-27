import React from 'react'
import { Link } from 'react-router-dom'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'



 export const Home = () => {
    return (
        <div className='hero'>
            <div className="card-img">
                <Link to='/'>
                <img src="./assets/logo.png" className='logo'  alt="logo" height="500px"/>
                </Link>
            </div>

            {ItemListContainer}
        </div>
    )
}

