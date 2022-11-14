import React, { useState,useEffect} from 'react';
import './App.css';
import { Route,Routes,Link} from 'react-router-dom';
import Axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';
import Cardlist from './components/quotes/Cardlist';
import Card from './components/quotes/Card';

//useefect reakcije cele komponente na nesto
//use memo upordejuje vrednosti ako su iste nece rirenderovati ako nisu rirenderovace
 //https://api.github.com/users/${user}

const App =()=> {
   const[addheading,setAddheading]=useState([]);

   const heading2=[]
      heading2.push(addheading)

      
  return ( 
    <>
       <Cardlist 
        heading2={heading2}
       />
       <input type="text" placeholder='unesi' onChange={(e)=>{setAddheading(e.target.value)
      }}/>
      <button onClick={()=>{console.log('sd');}}>add</button>
    </>
  );

 
}

export default App;
