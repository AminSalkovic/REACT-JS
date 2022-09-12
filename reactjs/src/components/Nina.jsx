import  Axios from 'axios'
import React,{useState,useEffect} from 'react'

const Nina = () => {
 
    const[datas,setDatas]=useState([])
  
    const data=()=>{
          Axios.get("http://localhost:3000/tags").then((res)=>console.log(res)).catch((er)=>console.log(er))
    } 

   useEffect(()=>{
     data();
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