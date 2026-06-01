
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Props from './pages/Props'
import Lists from './pages/Lists'

export default function App() {
  return (
    <>
    
    <BrowserRouter>
    <Nav/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/props' element={<Props/>} />
      <Route path='/lists' element={<Lists/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}
