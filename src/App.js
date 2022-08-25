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
import CardComponent from './components/CardComponent/CardComponent';
import CartWidget from './components/CartWidget/CartWidget';
import campera from './components/CardComponent/campera.jpg';
import campera1 from './components/CardComponent/campera1.jpg';
import campera2 from './components/CardComponent/campera2.jpg';

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

// Desafio 3 Componentes

  class App extends React.Component{
    render (){
      return (
        <div>
          <CartWidget greeting='Bienvenid@!' />
          <div className='UserSection'>
              <CardComponent 
              name='CAMPERA HELD MUJER'
              description='Cuello suave, cremalleras de ventilación y estiramiento en la parte interior del brazo garantizan una gran comodidad de uso. Está disponible 3 colores diferentes.'
              img={campera}
              price='Precio: $240.000'
              />
              <CardComponent 
              name='CAMPERA ESTILO TOURING MUJER'
              description='Campera de mujer para motos de touring con corte a medida. Particularmente cómoda de llevar permite ajustar el ancho del brazo, la cintura y la cadera.'
              img={campera1}
              price='Precio: $164.000'
              />
              <CardComponent 
              name='CAMPERA TUCANO URBANO'
              description='Cazadora cuatro estaciones de corte medio, transpirable, cortaviento e impermeable, corte femenino'
              img={campera2}
              price='Precio: $70.000'
              />
          </div>
        </div>
      )
    }
  }


export default App;
