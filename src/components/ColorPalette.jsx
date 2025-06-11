import React from 'react'
import './ColorPalette.css'

function ColorPalette() {
  const colors = [
    {
      name: 'Azul Corporativo',
      hex: '#0072CE',
      image: '/#0072CE - AZUL.png'
    },
    {
      name: 'Rojo Corporativo',
      hex: '#DD0021',
      image: '/#DD0021 - ROJO.png'
    },
    {
      name: 'Amarillo Corporativo',
      hex: '#FBD600',
      image: '/#FBD600- AMARILLO.png'
    }
  ]

  return (
    <div className="color-palette">
      <h3>Colores Corporativos</h3>
      <div className="color-grid">
        {colors.map((color, index) => (
          <div key={index} className="color-item">
            <img src={color.image} alt={color.name} />
            <p className="color-name">{color.name}</p>
            <p className="color-hex">{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorPalette