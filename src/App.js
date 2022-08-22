import React from 'react';
import './style.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import NavBarExample from "./components/NavBar";
import contact from './pages/contact';
import home from './pages/home';
import products from './pages/products';


function App() {
    return (
      <div className='App'>
        <h1>Bienvenido a Jabali Motors!</h1>
        <Router>
          <Routes>
            <Route path='/' element={ <NavBarExample />}>
              <Route path index element={ <home/>}/>
              <Route path='contact' element={ <contact/>}/>
              <Route path='products' element={ <products/>}/>

              <Route path='*' element={ <Navigate replace to="/" />}/>
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }


export default App;
