import React from 'react';
import './style.css';

// REACT - ROUTER - DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header/Header';
import ResponsiveNavigation from './components/ResponsiveNavigation/ResposiveNavigation';

// CONTEXT
import { ItemsProvider } from './Context/ItemsContext';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import GenreType from './pages/GenreType';

const App = () => {
  return (
    <Router>
      <ItemsProvider>
        <div className='App'>
          <Header />
          <ResponsiveNavigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/detail/:id' element={<ItemDetail />} />
            <Route path='/category/:category' element={<GenreType />} />
          </Routes>
        </div>
      </ItemsProvider>
    </Router>
  );
};

export default App;

