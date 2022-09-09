import React from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className='hero'>
            <div className="card-img">
                <Link to='/'>
                <img src="./assets/logo.png" className='logo'  alt="logo" height="500px"/>
                </Link>
            </div>

            <Products/> 

        </div>
    )
}

export default Home