import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import HomeOffice from './pages/HomeOffice'
import HomeSchool from './pages/HomeSchool'
import Gaming from './pages/Gaming'
import Productos from './pages/Productos'
import Inspiracion from './pages/Inspiracion'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-office" element={<HomeOffice />} />
            <Route path="/home-school" element={<HomeSchool />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/inspiracion" element={<Inspiracion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App