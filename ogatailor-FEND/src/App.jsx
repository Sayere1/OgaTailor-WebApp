import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Ogatailor-pages/Home/Home'
import Cart from './Ogatailor-pages/Cart/Cart'
import OrderSect from './Ogatailor-pages/OrderSect/OrderSect'
import Footer from './components/Footer/Footer'
import OgaLogin from './components/OgaLogin/OgaLoginLogin'
import MyOrders from './Ogatailor-pages/OgaOrders/MyOrders'
import Ogaverify from './Ogatailor-pages/OgaAuth/Ogaverify'


const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (

    <>
    {showLogin?<OgaLogin setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/order' element={<OrderSect/>} />
        <Route path='/Ogaverify' element={<Ogaverify/>}/>
        <Route path='/myorders' element={<MyOrders/>} />
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App
