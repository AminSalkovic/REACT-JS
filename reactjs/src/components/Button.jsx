import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES=['btn--primary','btn--outline'];

const SIZES = ['btn--medium', 'btn-large'];


const Button =(
    children,
    type,
    onClick,
    buttonStyles,
    buttonSizes)=>{
  
const checkButtonStyle= STYLES.includes(buttonStyles) ? buttonStyles : STYLES[0]

const checkButtonSize=SIZES.includes(buttonSizes) ? buttonSizes : SIZES[0]

return(
    <Link to='/sign-up' className='btn-mobile'>
        <Button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}</Button>
    </Link>
)
}

export default Button