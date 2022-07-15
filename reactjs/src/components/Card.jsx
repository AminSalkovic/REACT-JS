import { useState } from 'react';


const Card =({value})=>{  
    const[boja,setBoja]=useState(false)
    

    const themeStyles={
        backgroundColor:'orange',
      
    }
    return(
        <div className='card'> 
        <div>{boja}</div>
         <button className='submit' onClick={()=>setBoja(<div style={themeStyles}></div>)}> submit</button>
          <button className='delete' onClick={()=>setBoja(false)}>delete</button>
        </div>
    )
}
export default Card;