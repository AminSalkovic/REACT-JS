import  Axios from 'axios'
import React,{useState,useEffect} from 'react'

const Nina = () => {
 
    const[datas,setDatas]=useState([])
  
 
      const ninafacts =()=>{
          Axios.get("https://catfact.ninja/facts")
          .then((res)=> {
            setDatas([res.data])
        })
          .catch((er)=>console.log(er))
      }
   

   useEffect(()=>{
     ninafacts();
   },[])
  return (
    datas.map((el)=>{

        <>
            <h1>{el?.fact}</h1>
        </>
    })
  )
}

export default Nina