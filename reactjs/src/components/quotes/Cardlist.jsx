import React from 'react'
import Card from './Card'
import {Carditems} from './Cardtems'
const Cardlist = () => {
   
  return (
    <div>

        
        {Carditems.map((items,id)=>{
            return(
                <>
                <Card  
                  key={id}
                  heading={items.heading}
                  message={items.message}
                  />

                </>
            )
        })}
    </div>
  )
}

export default Cardlist