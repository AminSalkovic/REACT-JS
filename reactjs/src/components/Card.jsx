import { useState } from 'react';


const Card =(props)=>{  
    const[isChecked,setIsChecked]=useState(false)
    
  return(
    <div className="card">
        <div className={`kartica ${isChecked ? 'cekirano' : ''}`}>
          <p>{props.title}</p>
        </div>

        <button className='submit' onClick={()=>{setIsChecked(!isChecked)}}>Submit</button>
        <button className='delete'> Delete</button>
    </div>
  )
 
}
export default Card;