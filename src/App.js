import React from 'react';
import './style.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Products from './components/pages/Products'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import ProductDetailContainer from './components/ProductDetail/ProductDetailContainer'
import ListContainer from './components/ProductList/ListCointainer'

function App() {
  return (
    <>
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/product" element={<Products/>} />
          <Route  path="/detail/:id" element={<ProductDetailContainer/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/register" element={<Register/>} />
          <Route  path="/cart" element={<Cart/>} />
          <Route  path="/category/:categoryId" element={<ListContainer/>} />
          <Route  path="/title/:titleId" element={<ListContainer/>} />
          <Route  path="/product/detail/:productId" element={<ListContainer/> } />
        </Routes>
      </BrowserRouter>
    </>

  )
}



export default App;
