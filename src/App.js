import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './/components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './/components/ItemListContainer/ItemListContainer';
import { NavBar } from './/components/NavBar/NavBar';
import { CartContext } from './Context/CartContext';

function App() {

  return (
    <CartContext>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/detalles/:id' element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartContext>
  );

}

export default App
