import React from 'react'
import Card from './Card'
import {Carditems} from './Cardtems'
const Cardlist = ({heading2}) => {
  return (
    <div>
        {Carditems.map((items,id)=>{
            return(
                <Card 
                  heading2={heading2}
                  key={id}
                  heading={items.heading}
                  message={items.message}
                />
            )
        })}
    </div>
  )
}

export default Cardlist