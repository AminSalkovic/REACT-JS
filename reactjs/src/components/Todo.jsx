import { useState } from "react";
import Card from "./Card";

const TodoList =()=>{
    // const data=["amin","saki","salkovic"]
    const [data ,setData]=useState([])
    let a=""
    return(
           
        <div className="todo">
   
       <input type="text" placeholder="e-mail" onChange={(e)=>{
            a=e.target.value

       }}/>
       <button onClick={()=>{
        setData([...data,a])
       }}>ADD</button>
           
           {data.map((el)=>{
return <Card/>
           })}
        </div>
      
    )
   }
   export default TodoList;