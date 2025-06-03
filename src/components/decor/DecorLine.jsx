import './DecorLine.scss';

import React from 'react'

export const DecorLine = ({ className }) => {
  return (
    <div className={`decor-line ${className}`}>
        <div className="line"></div>
        <div className="star">☆</div>
        <div className="line"></div>
    </div>
  )
}
