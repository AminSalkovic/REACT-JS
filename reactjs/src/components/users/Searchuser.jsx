
import React from 'react'
import { useEffect } from 'react'

const Searchuser = () => {

    const githubdadta=()=>{
        fetch(`https://api.github.com/users/AminSalkovic/`).
        then((res)=>{
            res.json()
            console.log(res);
        }
            )
    }

    useEffect(()=>{
      githubdadta()   
    },[])
    
    return (
<>

</>
  )
}

export default Searchuser