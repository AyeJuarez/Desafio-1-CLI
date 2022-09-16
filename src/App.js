import { CartProvider } from "./Context/useContext"
import Router from "./Router/Router"


function App() {
  return (
    <>
    <CartProvider>
      <Router  />
    </CartProvider>
    </>
  )
}

export default App
