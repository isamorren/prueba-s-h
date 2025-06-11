import React from 'react'
import './CategoryPage.css'

function HomeOffice() {
  return (
    <div className="category-page">
      <div className="category-hero">
        <h1>Home Office</h1>
        <p>Transforma tu casa en la oficina perfecta</p>
      </div>
      
      <div className="container">
        <section className="category-intro">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Trabaja desde casa con comodidad y estilo</h2>
              <p>
                El teletrabajo llegó para quedarse. En Sodimac Homecenter encontrarás 
                todo lo necesario para crear un espacio de trabajo productivo, ergonómico 
                y que se adapte perfectamente a tu hogar.
              </p>
            </div>
            <div className="intro-image">
              <img src="/src/assets/images/pages/home-office-1.jpg" alt="Oficina en casa minimalista" />
            </div>
          </div>
        </section>
        
        <section className="product-categories">
          <h3>Categorías destacadas</h3>
          <div className="product-grid">
            <div className="product-category">
              <h4>Escritorios</h4>
              <p>Desde clásicos hasta modernos con altura ajustable</p>
              <span className="product-count">+500 modelos</span>
            </div>
            <div className="product-category">
              <h4>Sillas ergonómicas</h4>
              <p>Cuida tu postura con sillas diseñadas para largas jornadas</p>
              <span className="product-count">+300 opciones</span>
            </div>
            <div className="product-category">
              <h4>Organización</h4>
              <p>Estanterías, cajoneras y accesorios para mantener todo en orden</p>
              <span className="product-count">+200 productos</span>
            </div>
            <div className="product-category">
              <h4>Iluminación</h4>
              <p>Lámparas de escritorio y luz ambiental para reducir fatiga visual</p>
              <span className="product-count">+150 alternativas</span>
            </div>
          </div>
        </section>
        
        <section className="tips-section">
          <div className="tips-content">
            <div className="tips-text">
              <h3>Tips para tu Home Office ideal</h3>
              <ul className="tips-list">
                <li>Elige un espacio con buena iluminación natural</li>
                <li>Invierte en una silla ergonómica para cuidar tu espalda</li>
                <li>Mantén tu escritorio organizado con accesorios funcionales</li>
                <li>Considera un escritorio con altura ajustable para alternar posiciones</li>
                <li>Añade plantas para mejorar el ambiente y la productividad</li>
              </ul>
            </div>
            <div className="tips-image">
              <img src="/src/assets/images/pages/home-office-2.jpg" alt="Oficina compacta nórdica" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeOffice