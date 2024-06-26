import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main' 
import Navbar from './components/Navbar/Navbar'
import Apple from './components/Apple/Apple'
import Products from './components/Products/Products'
import Svager from './components/Svager/Svager'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Apple/>
    <Products/>
    <Svager/>
    <Footer/>
    
    </>
  )
}

export default App
