import { useState } from 'react';
const Counter=()=>{
  const[counter,setCounter]=useState(0)
   return(
     <div className="container">
       <button onClick={()=>setCounter(counter-1)}>-1</button>
        <h1>{counter}</h1>
       <button onClick={()=>setCounter(counter + 2)}>+1</button>
       <button onClick={()=> setCounter(0)}>restart</button>
    </div>
     )
  
  }

  export default Counter;