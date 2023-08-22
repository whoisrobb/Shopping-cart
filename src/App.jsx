import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Cart from './pages/Cart'
import ItemDetail from './pages/ItemDetail'
import CartProvider from './components/CartProvider'

function App() {

  return (
    <CartProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/explore/:id' element={<ItemDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </CartProvider>
  )
}

export default App