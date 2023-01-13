import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

const Button=()=>{
  return(
    <Link to='sign-up'>
    <button className='btn'>Sign Up</button>
    <button>amin</button>
    <button>i arrived from trnava</button>
     <button>amin</button>
      <button>amin amin</button>
    </Link>
  )
}
export default Button;