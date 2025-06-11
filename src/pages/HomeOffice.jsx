import React from 'react'
import './CategoryPage.css'

function HomeOffice() {
  return (
    <div className="category-page">
      <div className="category-hero">
        <h1>Home Office 🏠</h1>
        <p>WFH mode: ON | Todo lo que necesitas está en Homecenter</p>
      </div>
      
      <div className="container">
        <section className="category-intro">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Tu oficina, tus reglas 💼</h2>
              <p>
                El trabajo en casa no es tendencia, es tu nueva realidad. En Homecenter 
                tienes todo para montar el workspace que hará que tu productividad 
                se dispare. Un solo lugar, infinitas posibilidades para tu career glow-up.
              </p>
            </div>
            <div className="intro-image">
              <img src="/pages/home-office-1.jpg" alt="Oficina en casa minimalista" />
            </div>
          </div>
        </section>
        
        <section className="product-categories">
          <h3>Todo tu office setup a un click 📱</h3>
          <div className="product-grid">
            <div className="product-category">
              <h4>🖥️ Escritorios</h4>
              <p>Sit-stand desks que se adaptan a tu energy level</p>
              <span className="product-count">+500 modelos</span>
            </div>
            <div className="product-category">
              <h4>🪑 Sillas ergonómicas</h4>
              <p>El soporte que necesitas para esas meetings extra largas</p>
              <span className="product-count">+300 opciones</span>
            </div>
            <div className="product-category">
              <h4>🗂 Organización</h4>
              <p>¡Ordena tu vida con estilo! Cada cosa en su lugar</p>
              <span className="product-count">+200 productos</span>
            </div>
            <div className="product-category">
              <h4>💡 Iluminación</h4>
              <p>Ilumina tu espacio = Zoom top, en serio ✨</p>
              <span className="product-count">+150 alternativas</span>
            </div>
          </div>
        </section>
        
        <section className="tips-section">
          <div className="tips-content">
            <div className="tips-text">
              <h3>Hacks productivos que funcionan 🚀</h3>
              <ul className="tips-list">
                <li>☀️ Luz natural = impulso instantáneo de ánimo</li>
                <li>💺 Silla ergonómica = inversión en tu futuro yo</li>
                <li>📏 Escritorio ordenado = mente despejada, foco total</li>
                <li>↕️ Escritorio sit‑stand = adiós sedentarismo, hola movimiento</li>
                <li>🌱 Plantas por doquier = jungla urbana en tu oficina</li>
              </ul>
            </div>
            <div className="tips-image">
              <img src="/pages/home-office-2.jpg" alt="Oficina compacta nórdica" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeOffice