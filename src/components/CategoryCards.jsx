import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryCards.css'

function CategoryCards() {
  const categories = [
    {
      id: 1,
      title: '🏢 WFH Boss',
      description: 'Monta tu oficina y haz que tu jefe se pregunte dónde conseguiste tanto flow',
      image: '/src/assets/images/categories/home-office-card.jpg',
      link: '/home-office',
      features: ['Setup ergonómico AF', 'Sillas que no destrozan tu espalda', 'Organization hacks'],
      badge: 'Most Popular',
      trending: true
    },
    {
      id: 2,
      title: '🎓 Study Vibes',
      description: 'Tu mini estudiante merece un espacio que inspire su próximo level',
      image: '/src/assets/images/categories/home-school-card.jpg',
      link: '/home-school',
      features: ['Escritorios que crecen contigo', 'Storage infinito', 'Luz que no cansa'],
      badge: 'Family Fav'
    },
    {
      id: 3,
      title: '🎮 Gaming Zone',
      description: 'Arma tu battlestation y que tiemblen tus enemigos online',
      image: '/src/assets/images/categories/gaming-card.jpg',
      link: '/gaming',
      features: ['Escritorios pro-gamer', 'Sillas para maratones', 'RGB everything'],
      badge: 'Beast Mode',
      trending: true
    }
  ]

  return (
    <section className="category-cards">
      <div className="container">
        <h2 className="section-title">Tu vibe, nuestra solución 🎆</h2>
        <p className="section-subtitle">Elige tu fighter y domina desde casa</p>
        <div className="cards-grid">
          {categories.map(category => (
            <article key={category.id} className="category-card">
              <div className="card-image">
                <img src={category.image} alt={category.title} />
                {category.badge && (
                  <div className="card-badge">{category.badge}</div>
                )}
                {category.trending && (
                  <div className="trending-indicator">🔥</div>
                )}
              </div>
              <div className="card-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <ul className="features-list">
                  {category.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to={category.link} className="card-link">
                  Let's go! 🚀
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryCards