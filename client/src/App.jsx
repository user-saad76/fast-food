import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BannerCarousel from './components/BannerCarousel'
import OrderDetails from './components/OrderDetails'
import Deal from './components/Deal'


function App() {
  

  return (
    <>
      <Navbar/>
      <BannerCarousel/>
      <OrderDetails/>
      <Deal/>
     
    </>
  )
}

export default App
