import React from 'react'
import './CategoryPage.css'

function HomeSchool() {
  return (
    <div className="category-page">
      <div className="category-hero">
        <h1>Home School 🎓</h1>
        <p>Tu aula en casa, nivel PRO | Todo lo encuentras en Homecenter</p>
      </div>
      
      <div className="container">
        <section className="category-intro">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Donde el conocimiento se vuelve cool🤓</h2>
              <p>
                Home schooling is the new black. En Homecenter creamos tu espacio de estudio adictivo: todo lo que necesitas para convertir cualquier rincón en el aula más top del vecindario.
              </p>
            </div>
            <div className="intro-image">
              <img src="/src/assets/images/pages/home-school-1.jpg" alt="Familia estudiando en casa" />
            </div>
          </div>
        </section>
        
        <section className="product-categories">
          <h3>Tu squad de estudio esencial 📚</h3>
          <div className="product-grid">
            <div className="product-category">
              <h4>📏 Escritorios kids</h4>
              <p>Grow‑With‑Me desk: en cada etapa de su crecimiento</p>
              <span className="product-count">+200 modelos</span>
            </div>
            <div className="product-category">
              <h4>🪑 Sillas kids</h4>
              <p>Cómodo + colorido = modo concentración activado</p>
              <span className="product-count">+150 opciones</span>
            </div>
            <div className="product-category">
              <h4>🗂 Storage solutions</h4>
              <p>Libros, cuadernos, y todo lo que acumulan organizadito</p>
              <span className="product-count">+300 soluciones</span>
            </div>
            <div className="product-category">
              <h4>🗺️ Pizarras & boards</h4>
              <p>Herramientas interactivas que hacen magia</p>
              <span className="product-count">+80 variedades</span>
            </div>
          </div>
        </section>
        
        <section className="tips-section">
          <div className="tips-content">
            <div className="tips-text">
              <h3>Elementos clave que revolucionan tu rincón de estudio 🎨</h3>
              <ul className="tips-list">
                <li>🌅 Ventana + luz natural = mente a tope</li>
                <li>📈 Muebles que crecen con tus peques = inversión inteligente</li>
                <li>📋 Todo organizado = cero estrés, foco total</li>
                <li>🎨 Zona de estudio + zona de descanso = equilibrio perfecto</li>
                <li>🌈 Colores inspiradores = creatividad desatada</li>
              </ul>
            </div>
            <div className="tips-image">
              <img src="/src/assets/images/pages/home-school-2.jpg" alt="Habitación juvenil con escritorio" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeSchool