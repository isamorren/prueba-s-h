import React from 'react'
import SimpleButton from './SimpleButton'
import './Hero.css'

function Hero() {
  return (
    <section className="hero bg-pattern-subtle bg-pattern-diamonds">
      <div className="hero-image">
        <img src="/src/assets/images/hero/banner-principal.jpg" alt="Transforma tu hogar en el espacio ideal" />
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Tu casa, tu regla 🏠✨
            <span className="hero-highlight">WFH como un pro</span>
          </h1>
          <p className="hero-subtitle">
            🏢 Home Office • 🎓 Home School • 🎮 Gaming Zone
          </p>
          <div className="hero-badge">
            <span className="trending">🔥 Trending</span>
            <span className="stat">+2.5M gamers ya confiaron en nosotros</span>
          </div>
          <div className="hero-buttons">
            <SimpleButton 
              variant="primary" 
              size="medium"
              onClick={() => console.log('Navegando a productos')}
            >
              🛒 Shop Now
            </SimpleButton>
            <SimpleButton 
              variant="secondary" 
              size="medium"
              onClick={() => console.log('Navegando a inspiración')}
            >
              ✨ Get Inspo
            </SimpleButton>
          </div>
          <div className="hero-social-proof">
            <span>💬 "Mi setup cambió mi vida" - @maria_wfh</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero