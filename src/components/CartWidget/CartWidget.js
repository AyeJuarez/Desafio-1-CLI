import React from 'react'
import '../CartWidget/CartWidget.css';
import logo from './logo.png';

const CartWidget = (props) => {
    return (
        <div className='CartWidget'>
            <img src={logo} alt='logo' />
            <h1>{ props.greeting }</h1>
            
        </div>
        
    )
}

export default CartWidget

