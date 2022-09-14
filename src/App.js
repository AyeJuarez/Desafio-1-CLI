import { CartWidget } from './components/CartWidget'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'

import Products from './components/pages/Products'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/category/:id' element={<Products />} />
          <Route path='/products/detail/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<div>Aun no hay nada por aqui!</div>} />
        </Routes>
        <CartWidget />
      </main>
    </div>
  )
}

export default App
