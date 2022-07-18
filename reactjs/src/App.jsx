import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'


const App =()=> {
  // const[isCardShown,setIsCardShown]=useState(false)
return (
   
     <Router>
       <Navbar/>
     </Router>
     


      //  <button  onClick={()=>{
      //    setIsCardShown(!isCardShown)
      //   }}>CLICK ME</button>cd
      // {isCardShown && <Card value={"nesto"}/>} */}
  
  
   
 
  );
}

export default App;
