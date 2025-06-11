import React, { useState } from 'react'
import './InteractiveCarousel.css'

function InteractiveCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      title: "WFH like a CEO 👑",
      subtitle: "Productivity level: Infinite",
      image: "/src/assets/images/pages/home-office-1.jpg",
      products: [
        { name: "Escritorio Boss", price: "$299.990", hot: true },
        { name: "Silla Executive", price: "$199.990" },
        { name: "Lámpara Focus", price: "$49.990" }
      ],
      vibe: "professional"
    },
    {
      id: 2,
      title: "Gaming Beast Mode 🎮",
      subtitle: "Ready Player One vibes",
      image: "/src/assets/images/pages/gaming-1.jpg",
      products: [
        { name: "Escritorio Gamer RGB", price: "$449.990", hot: true },
        { name: "Silla Gaming Pro", price: "$329.990" },
        { name: "Setup LED Kit", price: "$89.990" }
      ],
      vibe: "gaming"
    },
    {
      id: 3,
      title: "Study Squad Goals 📚",
      subtitle: "Future leaders training here",
      image: "/src/assets/images/pages/home-school-1.jpg",
      products: [
        { name: "Escritorio Kids Pro", price: "$179.990" },
        { name: "Silla Ergonomic Jr", price: "$129.990", hot: true },
        { name: "Organizador Smart", price: "$39.990" }
      ],
      vibe: "study"
    }
  ]
  
  return (
    <section className="interactive-carousel">
      <div className="container">
        <h2 className="carousel-title">Room inspo que no para de viral 🔥</h2>
        <p className="carousel-subtitle">Tap, explore, get inspired</p>
        
        <div className="carousel-container">
          <div className="carousel-main">
            <div className="slide-image">
              <img src={slides[activeSlide].image} alt={slides[activeSlide].title} />
              <div className="slide-overlay">
                <div className="slide-content">
                  <h3>{slides[activeSlide].title}</h3>
                  <p>{slides[activeSlide].subtitle}</p>
                </div>
              </div>
              
              <div className="hotspots">
                {slides[activeSlide].products.map((product, index) => (
                  <div 
                    key={index} 
                    className={`hotspot hotspot-${index + 1} ${product.hot ? 'hot' : ''}`}
                    title={`${product.name} - ${product.price}`}
                  >
                    <span className="hotspot-pulse"></span>
                    <div className="product-tooltip">
                      <strong>{product.name}</strong>
                      <span className="price">{product.price}</span>
                      {product.hot && <span className="hot-badge">🔥 HOT</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="carousel-nav">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`nav-item ${activeSlide === index ? 'active' : ''} vibe-${slide.vibe}`}
                onClick={() => setActiveSlide(index)}
              >
                <span className="nav-title">{slide.title}</span>
                <span className="nav-subtitle">{slide.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="carousel-cta">
          <button className="btn btn-primary carousel-btn">
            🛒 Shop this look
          </button>
          <span className="social-share">📱 Share this vibe</span>
        </div>
      </div>
    </section>
  )
}

export default InteractiveCarousel