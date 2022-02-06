import React from 'react'
import CardCss from './Card.module.scss'
const Card = ({ children, title }) => {
  return (
    <div className={CardCss.container}>
      {title ? (
        <div>
          <h1 className={CardCss.title}>{title}</h1>
        </div>
      ) : null}
      {children}
    </div>
  )
}

export default Card
