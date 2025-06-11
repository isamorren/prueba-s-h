import React from 'react'
import './CategoryPage.css'

function HomeSchool() {
  return (
    <div className="category-page">
      <div className="category-hero">
        <h1>Home School</h1>
        <p>El mejor ambiente para el aprendizaje en casa</p>
      </div>
      
      <div className="container">
        <section className="category-intro">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Espacios que inspiran el aprendizaje</h2>
              <p>
                La educación en casa requiere ambientes especialmente diseñados para 
                fomentar la concentración y el desarrollo. Encuentra todo lo necesario 
                para crear el espacio de estudio perfecto para tus hijos.
              </p>
            </div>
            <div className="intro-image">
              <img src="/src/assets/images/pages/home-school-1.jpg" alt="Familia estudiando en casa" />
            </div>
          </div>
        </section>
        
        <section className="product-categories">
          <h3>Todo para el estudio en casa</h3>
          <div className="product-grid">
            <div className="product-category">
              <h4>Escritorios infantiles</h4>
              <p>Diseños ajustables que crecen con tus hijos</p>
              <span className="product-count">+200 modelos</span>
            </div>
            <div className="product-category">
              <h4>Sillas para niños</h4>
              <p>Ergonómicas y coloridas para todas las edades</p>
              <span className="product-count">+150 opciones</span>
            </div>
            <div className="product-category">
              <h4>Almacenamiento</h4>
              <p>Organizadores para libros, útiles y materiales</p>
              <span className="product-count">+300 soluciones</span>
            </div>
            <div className="product-category">
              <h4>Pizarras y tableros</h4>
              <p>Herramientas didácticas para el aprendizaje interactivo</p>
              <span className="product-count">+80 variedades</span>
            </div>
          </div>
        </section>
        
        <section className="tips-section">
          <div className="tips-content">
            <div className="tips-text">
              <h3>Cómo crear el espacio de estudio perfecto</h3>
              <ul className="tips-list">
                <li>Ubica el escritorio cerca de una ventana para luz natural</li>
                <li>Elige muebles ajustables que se adapten al crecimiento</li>
                <li>Mantén los materiales organizados y al alcance</li>
                <li>Crea zonas diferenciadas para estudio y descanso</li>
                <li>Incorpora colores que estimulen la creatividad</li>
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