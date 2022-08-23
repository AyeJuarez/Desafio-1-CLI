import React from 'react';
import './style.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBarExample from "./components/NavBar";
import Contact from './pages/contact';
import Home from './pages/home';
import Products from './pages/products';


function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <NavBarExample />}>
              <Route path='/' index element={ <Home/>}/>
              <Route path='/contact' element={ <Contact/>}/>
              <Route path='/products' element={ <Products/>}/>

              <Route path='/navigate' element={ <Navigate replace to="/" />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }


export default App;
