import React from 'react';
import './style.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import NavBarExample from "./components/NavBar";
import Contact from './pages/contact';
import Home from './pages/home';
import Products from './pages/products';


function App() {
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
  }


export default App;
