import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Productos</h3>
            <ul>
              <li><a href="#">Escritorios</a></li>
              <li><a href="#">Sillas</a></li>
              <li><a href="#">Organización</a></li>
              <li><a href="#">Iluminación</a></li>
              <li><a href="#">Decoración</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Servicios</h3>
            <ul>
              <li><a href="#">Asesoría en diseño</a></li>
              <li><a href="#">Instalación</a></li>
              <li><a href="#">Armado</a></li>
              <li><a href="#">Financiamiento</a></li>
              <li><a href="#">Retiro en tienda</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Canales de compra</h3>
            <ul>
              <li><a href="#">Tienda online</a></li>
              <li><a href="#">App móvil</a></li>
              <li><a href="#">Tiendas físicas</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="TikTok">TK</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Sodimac Homecenter. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer