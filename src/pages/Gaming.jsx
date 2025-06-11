import React from 'react'
import './CategoryPage.css'

function Gaming() {
  return (
    <div className="category-page">
      <div className="category-hero">
        <h1>Gaming Zone 🎮</h1>
        <p>Level up tu setup | En Homecenter lo encuentras todo</p>
      </div>
      
      <div className="container">
        <section className="category-intro">
          <div className="intro-content">
            <div className="intro-text">
              <h2>¿Ready para dominar? 🔥</h2>
              <p>
                Tu battlestation merece más que muebles genéricos. En Homecenter 
                armamos el setup que hará que tus enemigos tiemblen. Todo en un solo lugar: 
                desde tu silla gamer hasta la iluminación RGB que te llevará a otro nivel.
              </p>
            </div>
            <div className="intro-image">
              <img src="/src/assets/images/pages/gaming-1.jpg" alt="Pareja gaming en sofá" />
            </div>
          </div>
        </section>
        
        <section className="product-categories">
          <h3>Todo tu arsenal gaming en un solo lugar 🎯</h3>
          <div className="product-grid">
            <div className="product-category">
              <h4>🖥️ Escritorios gaming</h4>
              <p>Cable management pro + espacio para setup multi-monitor</p>
              <span className="product-count">+100 modelos</span>
            </div>
            <div className="product-category">
              <h4>🪑 Sillas gamer</h4>
              <p>Anti-tilt para tus sesiones épicas de 8+ horas</p>
              <span className="product-count">+150 diseños</span>
            </div>
            <div className="product-category">
              <h4>💡 Iluminación RGB</h4>
              <p>Iluminación ambiental que vibra con tu gameplay</p>
              <span className="product-count">+200 opciones</span>
            </div>
            <div className="product-category">
              <h4>🎧 Accesorios</h4>
              <p>Organizadores, soportes y todo lo que necesitás</p>
              <span className="product-count">+250 productos</span>
            </div>
          </div>
        </section>
        
        <section className="tips-section">
          <div className="tips-content">
            <div className="tips-text">
              <h3>Setup tips de los pros 🏆</h3>
              <ul className="tips-list">
                <li>💺 Silla gamer con soporte lumbar = bye bye dolor de espalda</li>
                <li>📏 Escritorio XL con cable management = setup clean AF</li>
                <li>👀 Monitor a altura de ojos = no más cuello de jirafa</li>
                <li>🌈 RGB everywhere = porque aesthetic matters</li>
                <li>🎮 Organiza periféricos = más flow, menos mess</li>
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