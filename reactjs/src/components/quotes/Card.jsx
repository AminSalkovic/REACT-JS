import React from 'react'

const Card = ({heading,message,heading2}) => {
  return (
    <div>
        <h1>{heading}</h1>
        <p>{message}</p>
        <p>{heading2}</p>
    </div>
  )
}

export default Card