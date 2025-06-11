import React from 'react'
import './Features.css'

function Features() {
  const features = [
    {
      icon: '🏠',
      title: 'Todo en un solo lugar',
      description: 'Más de 65,000 productos para completar tu proyecto'
    },
    {
      icon: '📦',
      title: 'Compra omnicanal',
      description: 'Tienda online, app móvil, retiro en tienda y despacho a domicilio'
    },
    {
      icon: '🔧',
      title: 'Servicios completos',
      description: 'Instalación, armado, asesoría en diseño y financiamiento'
    },
    {
      icon: '🎨',
      title: '+25 estilos',
      description: 'Variedad de diseños para todos los gustos y espacios'
    },
    {
      icon: '💰',
      title: 'Precios competitivos',
      description: 'La mejor relación calidad-precio del mercado'
    },
    {
      icon: '🚀',
      title: 'Innovación constante',
      description: 'Nuevos productos y tendencias en diseño de interiores'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <h2 className="features-title">Por qué elegir Homecenter</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features