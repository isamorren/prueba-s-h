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
          <h2>Plot twist: tu casa es ahora tu oficina, aula Y arcade 🎮</h2>
          <p className="intro-text">
            2020 nos cambió el juego para siempre. Tu casa ya no es solo tu casa — es tu HQ. 
            <strong>En Sodimac tenemos todo lo que necesitas para convertir cualquier rincón 
            en tu zona de poder.</strong> From basic to boss level 🚀
          </p>
        </div>
      </section>
      
      <CategoryCards />
      
      <InteractiveCarousel />
      
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>65K+</h3>
              <p>🛒 Products que te vuelan la mente</p>
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
          <h2>Ready to level up? 🚀</h2>
          <p>Stop scrolling, start building. Tu setup soñado está a un click de distancia</p>
          <button className="btn btn-primary">
            🔥 Quiero mi glow up
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home