import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DivisiAyam from './components/DivisiAyam'
import DivisiTelur from './components/DivisiTelur'
import Produk from './components/Produk'
import Logistik from './components/Logistik'
import SegmenKlien from './components/SegmenKlien'
import Testimoni from './components/Testimoni'
import FAQ from './components/FAQ'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Supplier Ayam Potong & Telur Fresh | Kandang Makmur Sejahtera</title>
        <meta name="description" content="Supplier ayam broiler dan telur fresh terpercaya di Medan, Sumatera Utara. Melayani restoran, katering, hotel, dan agen grosir. Pengiriman cold chain, bersertifikat Halal MUI." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <Produk />
        {/* <DivisiAyam /> */}
        {/* <DivisiTelur /> */}
        <Logistik />
        <SegmenKlien />
        <Testimoni />
        <FAQ />
      </main>
      
      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}

export default App
