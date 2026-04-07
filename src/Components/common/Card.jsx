import React from 'react';

function Card({ children, className = '' }) {
  return <section className={`section-card ${className}`.trim()}>{children}</section>;
}

export default Card;
