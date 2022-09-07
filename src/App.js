import React from 'react';
import './style.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'

function App() {

  return (
    <>
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route  path="/" element={<ItemListContainer/>} />
          <Route  path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route  path="/title/:titleId" element={<ItemListContainer/>} />
          <Route  path="/product/detail/:productId" element={<ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
    </>

  )
}



export default App;
