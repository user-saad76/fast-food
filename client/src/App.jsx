import { useState } from 'react'
import './App.css'
import { BrowserRouter ,Routes,Route } from "react-router";
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './components/Navbar';
import Cart from './Pages/Cart';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  

  return (
    <>
   <BrowserRouter>
    <Navbar/>
   <Routes>
     <Route path='/home' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
       <Route path='/order' element ={<Cart/>}/>
       <Route path='/SignIn' element ={<SignIn/>}/>
         <Route path='/SignUp' element ={<SignUp/>}/>
   </Routes>
 
  </BrowserRouter>
     
     
    </>
  )
}

export default App
