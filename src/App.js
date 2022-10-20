import React from "react";
import {  Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemListContainer from "./pages/ItemListContainer";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {

  return (
    <>
          <CssBaseline>
            <Navbar />
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/contact" element= {<Contact />} />
                <Route path="/about" element= {<About />} />
                <Route path="/item/:id"  element= {<ItemDetailContainer />} />
                <Route path="/categories/:categoryId"  element={ <ItemListContainer /> } />
                <Route path="/cart"  element= {<Cart />} />
            </Routes>
            <Footer />
          </CssBaseline>

    </>
  );
}

export default App;

