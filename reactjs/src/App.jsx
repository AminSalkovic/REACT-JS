import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'


const App =()=> {
  // const[isCardShown,setIsCardShown]=useState(false)

  const[data,setData]=useState([]);

  let a=""
return (
  <div className="container">
   
       <h1>TODO LIST</h1>
       
       <div className="unos">

        <input type="text" onChange={(e)=>{
          a=e.target.value
        }}/>
        <button className='dugme' onClick={()=>{
          setData([...data,a])
        }}>Submit</button>
       </div>
       
       {data.map((el) => {
        return <Card title={el} />;
      })}
         
     </div>


























   //  <Router>
    //    <Navbar/>
    //  </Router>
     

    
      //  <button  onClick={()=>{
      //    setIsCardShown(!isCardShown)
      //   }}>CLICK ME</button>cd
    // {isCardShown && <Card value={"nesto"}/>} */}
    
    
    
    
 
  );
}

export default App;
