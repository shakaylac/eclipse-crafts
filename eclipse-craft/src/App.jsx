import './App.css'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGallery from './components/ProductGallery'
import ProductGallery_Carvings from './components/ProductGallery_Carvings'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductGallery />
      <ProductGallery_Carvings />
      <Footer />
    </>
  )
}

export default App
