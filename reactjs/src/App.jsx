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
  
   

return (
    <>
    <Router>
       <Navbar/>
    </Router>
{/* 
       <ThemeContext.Provider value={darkTheme}>
       
       <button onClick={toggleTheme}>Toggle Theme</button>
       
      </ThemeContext.Provider> */}




{/*   
       <button  onClick={()=>{
         setIsCardShown(!isCardShown)
        }}>CLICK ME</button>cd
      {isCardShown && <Card value={"nesto"}/>} */}
  
      </>
  );
}

export default App;
