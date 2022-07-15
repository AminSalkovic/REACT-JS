import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import Todo from './components/Todo'


// const ThemeContext = createContext()

const App =()=> {
  // const[isCardShown,setIsCardShown]=useState(false)
  
   

return (
  <div className="container">
       
           <Card/>




{/* 
       <ThemeContext.Provider value={darkTheme}>

        <button onClick={toggleTheme}>Toggle Theme</button>

        <FunctionContexComponent/>
       </ThemeContext.Provider> */}




{/*   
       <button  onClick={()=>{
        setIsCardShown(!isCardShown)
      }}>CLICK ME</button>cd
      {isCardShown && <Card value={"nesto"}/>} */}
    </div>
  );
}

export default App;
