import React from 'react'
import './CategoryPage.css'

function Gaming() {
  return (
    <div className="category-page">
      <div className="category-hero">
        <h1>Gaming Zone</h1>
        <p>Equipa tu espacio gamer al máximo nivel</p>
      </div>
      
      <div className="container">
        <section className="category-intro">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Tu setup gaming definitivo</h2>
              <p>
                Los gamers necesitan espacios diseñados para el rendimiento máximo. 
                Descubre nuestra línea especializada con muebles que combinan ergonomía, 
                funcionalidad y el estilo que todo gamer busca.
              </p>
            </div>
            <div className="intro-image">
              <img src="/src/assets/images/pages/gaming-1.jpg" alt="Pareja gaming en sofá" />
            </div>
          </div>
        </section>
        
        <section className="product-categories">
          <h3>Equipa tu battlestation</h3>
          <div className="product-grid">
            <div className="product-category">
              <h4>Escritorios gaming</h4>
              <p>Con gestión de cables y espacio para múltiples monitores</p>
              <span className="product-count">+100 modelos</span>
            </div>
            <div className="product-category">
              <h4>Sillas gamer</h4>
              <p>Máximo confort para sesiones maratonianas</p>
              <span className="product-count">+150 diseños</span>
            </div>
            <div className="product-category">
              <h4>Iluminación RGB</h4>
              <p>Crea la atmósfera perfecta para cada partida</p>
              <span className="product-count">+200 opciones</span>
            </div>
            <div className="product-category">
              <h4>Accesorios</h4>
              <p>Soportes, organizadores y complementos gaming</p>
              <span className="product-count">+250 productos</span>
            </div>
          </div>
        </section>
        
        <section className="tips-section">
          <div className="tips-content">
            <div className="tips-text">
              <h3>Tips para tu setup gaming profesional</h3>
              <ul className="tips-list">
                <li>Invierte en una silla con soporte lumbar y reposabrazos ajustables</li>
                <li>Elige un escritorio amplio con gestión de cables integrada</li>
                <li>Considera la altura del monitor para evitar fatiga cervical</li>
                <li>Añade iluminación RGB para personalizar tu espacio</li>
                <li>Organiza tus periféricos con soportes especializados</li>
              </ul>
            </div>
            <div className="tips-image">
              <img src="/src/assets/images/pages/gaming-2.jpg" alt="Setup gaming futurista" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Gaming