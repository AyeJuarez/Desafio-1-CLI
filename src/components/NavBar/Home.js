import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="./assets/logo.png" className="card-img" alt="logo" height="500px"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                    </div>
            </div>

            <Products/> 

        </div>
    )
}

export default Home