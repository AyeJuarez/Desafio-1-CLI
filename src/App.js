import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Categories from "./pages/Categories/Categories";
import Form from "./pages/Form/Form";

import CartContext from "./Context/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  const greeting = "Tienda Motors";

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
        <BrowserRouter>
          <CssBaseline>
            <Navbar />
            <Routes>
              <Route path="/">
                <Home greeting={greeting} />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/item/:id">
                <ItemDetailPage />
              </Route>
              <Route path="/categories/:categoryId">
                <Categories />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Routes>
            <Footer />
          </CssBaseline>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;

