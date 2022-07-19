import { useState } from 'react';


const Card =(props)=>{  
    const[isChecked,setIsChecked]=useState(false)
   const [remove,setRemove]=useState(false)
    
  return(
    <div className={`card ${remove ? 'izbrisano' : ''}`}>
        <div className={`kartica ${isChecked ? 'cekirano' : ''}`}>
          <p>{props.title}</p>
        </div>

        <button className='submit' onClick={()=>{setIsChecked(!isChecked)}}>Submit</button>
        <button className='delete' onClick={()=>{setRemove(!remove)}}> Delete</button>
    </div>
  )
 
}
export default Card;