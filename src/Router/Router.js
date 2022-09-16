import React from 'react'
import Navbar  from '../components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from '../components/CartWidget/CartWidget'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Home from '../components/pages/Home'
import Products from '../components/pages/Products'
import Cart from '../components/pages/Cart'

const Router = () => {
    return (
        <>
            <div>
                <Navbar />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/product' element={<Products />} />
                        <Route path='/product/:categorId/:titleId' element={<Products />} />
                        <Route path='/products/detail/:id' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<div>Aun no hay nada por aqui!</div>} />
                    </Routes>
                    <CartWidget />
                </main>
            </div>
        </>
    )
}

export default Router