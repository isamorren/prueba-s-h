import React from 'react'
import './CTAButton.css'

/**
 * Componente CTA optimizado para conversión
 * Implementa principios de UX y tracking avanzado
 */
const CTAButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  trackingId,
  conversionGoal = 'click',
  urgency = false,
  social_proof = null,
  className = '',
  ...props
}) => {
  
  const handleClick = (e) => {
    // Tracking básico por consola
    console.log('🎯 CTA Click:', {
      cta_id: trackingId,
      cta_text: children,
      conversion_goal: conversionGoal
    })
    
    // Ejecutar función onClick custom
    if (onClick) {
      onClick(e)
    }
  }
  
  const getButtonClasses = () => {
    const baseClasses = ['cta-button', `cta-${variant}`, `cta-${size}`]
    
    if (urgency) baseClasses.push('cta-urgency')
    if (className) baseClasses.push(className)
    
    return baseClasses.join(' ')
  }
  
  return (
    <div className="cta-container">
      <button 
        className={getButtonClasses()}
        onClick={handleClick}
        data-testid={`cta-${trackingId}`}
        {...props}
      >
        <span className="cta-text">{children}</span>
        {urgency && (
          <span className="cta-urgency-indicator">⚡</span>
        )}
      </button>
      
      {social_proof && (
        <div className="cta-social-proof">
          <small>{social_proof}</small>
        </div>
      )}
    </div>
  )
}

export default CTAButton