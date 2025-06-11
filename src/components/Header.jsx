import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/src/assets/logos/02.png" alt="Sodimac Homecenter" className="logo-img" />
          </Link>
          
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/home-office" className="nav-link">Home Office</Link>
            <Link to="/home-school" className="nav-link">Home School</Link>
            <Link to="/gaming" className="nav-link">Gaming</Link>
            <Link to="/productos" className="nav-link">Productos</Link>
            <Link to="/inspiracion" className="nav-link">Inspiración</Link>
          </nav>
          
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header