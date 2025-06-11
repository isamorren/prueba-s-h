import React from 'react'
import Hero from '../components/Hero'
import CategoryCards from '../components/CategoryCards'
import InteractiveCarousel from '../components/InteractiveCarousel'
import Features from '../components/Features'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      
      <section className="intro-section bg-pattern-subtle">
        <div className="container">
          <h2>Plot twist: tu casa es ahora tu oficina, aula y arcade 🎮</h2>
        </div>
      </section>
      
      <CategoryCards />
      
      <InteractiveCarousel />
      
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>65K+</h3>
              <p>🛒 Productos que te vuelan la mente</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>✨ Vibes para cada mood</p>
            </div>
            <div className="stat-item">
              <h3>0%</h3>
              <p>💳 Interés en financiamiento</p>
            </div>
          </div>
        </div>
      </section>
      
      <Features />
      
      <section className="cta-section corporate-accent">
        <div className="container">
          <h2>¿Listos para subir de nivel? 🚀</h2>
          <p>Para de scrollear y construye tu setup soñado con un solo clic</p>
          <button className="btn btn-primary">
            🔥 Quiero mi glow up
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home