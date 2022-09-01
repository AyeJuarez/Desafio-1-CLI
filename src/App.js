import React from 'react';
import './style.css';

// Importaciones del Desafio 2
/*
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import NavBarExample from "./components/NavBar";
import Contact from './pages/contact';
import Home from './pages/home';
import Products from './pages/products';
*/

//Importacion del Desafio 3

import CartWidget from './components/CartWidget/CartWidget';
/* import campera from './components/CardComponent/campera.jpg';
import campera1 from './components/CardComponent/campera1.jpg';
import campera2 from './components/CardComponent/campera2.jpg';
import CardComponent from './components/CardComponent/CardComponent'; */

//Importacion para el Desafio 5 -Maps
import ItemList from './components/ItemListContainer/ItemList';

/*function App() {
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={ <NavBarExample />}>
              <Route path index element={ <Home/>}/>
              <Route path='contact' element={ <Contact/>}/>
              <Route path='products' element={ <Products/>}/>

              <Route path='*' element={ <Navigate replace to="/" />}/>
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }*/




const App = () => {

  return (
    <div>
      <CartWidget greeting='Bienvenid@!' />
      <br />
      <br />
      <div className='UserSection'>
        <ItemList/>
      </div>
    </div>

  )
}
  


export default App;
