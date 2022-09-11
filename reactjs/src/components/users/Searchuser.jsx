
import React from 'react'
import { useEffect,useState} from 'react'
import Card from '../Card'

const Searchuser = () => {
  
    const[data,setData]=useState([])

    let a=''
    return (
<>
       

//   <input type="text" onChange={(e)=>{
        a=e.target.value
      }}/>
      <button className='dugme' onClick={()=>{
        setData([...data,a])
      }}>Submit</button>
    
     
     {data.map((el) => {
       return <Card/>;
      })} 
</>
  )
}

export default Searchuser