import React from 'react'

const SimpleButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  className = '',
  ...props 
}) => {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const sizeClass = size === 'large' ? 'btn-large' : ''
  
  const buttonClass = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ')
  
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default SimpleButton