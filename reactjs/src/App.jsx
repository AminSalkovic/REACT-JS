import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'

//useefect reakcije cele komponente na nesto
const App =()=> {
  // const[isCardShown,setIsCardShown]=useState(false)

  // const[data,setData]=useState([]);

  const[facts,setFacts]=useState([])

   
  function getFacts() {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFacts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getFacts();
    console.log("PRVI USEEFFCT");
  }, []);
  // let a=""
return (
<div className="container">
 
<div>
      {facts.map((el) => {
        return <h1>{el.fact}</h1>;
      })}
    </div>
  
 
     
  

     {/* /* <h1>TODO LIST</h1>
     
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
      })} */} 
    




{/* // return( */}

{/* //   <Router>
//      <Navbar/>
//    </Router> */}
      

   </div>

























    
      //  <button  onClick={()=>{
      //    setIsCardShown(!isCardShown)
      //   }}>CLICK ME</button>cd
    // {isCardShown && <Card value={"nesto"}/>} */}
    
    
    
    
 
  );
}

export default App;
