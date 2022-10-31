import React, { useState,useEffect} from 'react';
import './App.css';
import { Route,Routes,Link} from 'react-router-dom';
import Axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';

//useefect reakcije cele komponente na nesto
//use memo upordejuje vrednosti ako su iste nece rirenderovati ako nisu rirenderovace
 //https://api.github.com/users/${user}

const App =()=> {
    const [data,setData]=useState([])
    let searchValue="";

    const getGithubData=(user)=>{
          Axios.get(`https://api.github.com/users/${user}`).
          then((res)=>{
            setData([res.data])
          }).catch((err)=>console.log(err));
    }
    //  const inputData=(e)=>{
    //     searchValue=e.target.value
    //     console.log(searchValue);
    //  }
     useEffect(()=>{
        getGithubData()
     },[])
  return ( 
      <>
        <input type="text" placeholder='unesi ime' onSubmit={(e)=>{
           searchValue=e.target.value
        }}/>
        <button onClick={()=>{
           getGithubData(searchValue)
        }}>send</button>
         {data.map((item,id)=>{
           return (
           <div>
              <h1 key={id}>{item.name}</h1>
              <h2>{item.followers}</h2>
           </div>
           )
        })}
      </>
  );

 
}

export default App;
