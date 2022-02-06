import React from 'react'
import './button.scss'


const Button = ({children, google, inverted ,...otherButtonProps}) => (
   
    <button className={`${google? 'google' : ''} ${inverted? 'inverted' : ''} button`}
        {...otherButtonProps}
    >
        {children}
    </button>
)
export default Button;