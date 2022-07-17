import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Todo from './components/Todo'


// const ThemeContext = createContext()

const App =()=> {
  // const[isCardShown,setIsCardShown]=useState(false)
    
   const data=["amin","saki","salkovic"]

return (
    <div className="container">
      <Todo/>
      <Card/>
      
{data.map}

{/*   
       <button  onClick={()=>{
         setIsCardShown(!isCardShown)
        }}>CLICK ME</button>cd
      {isCardShown && <Card value={"nesto"}/>} */}
  
     
  </div>
  );
}

export default App;
