import React, { useState,useEffect} from 'react';
import './App.css';
import { Route,Routes,Link} from 'react-router-dom';
import Axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar';
import Cards from './components/Cards';
import MyComponent from './components/MyComponent';


//useefect reakcije cele komponente na nesto
//use memo upordejuje vrednosti ako su iste nece rirenderovati ako nisu rirenderovace

export const UserContext=React.createContext()
const App =()=> {
 
  const[myState,setMyState]=useState('amin')

return ( 
  <UserContext.Provider>
 <>
     <Cards/>
     <MyComponent/>
 </>
  </UserContext.Provider>
    
  );
  
  
  
  {/* <div className="div1">
 <Routes>
   <Route path={'counter'} element={<Counter/>}/>
   <Route path={'korisnikp'} element={<Korisnikp/>}/>
 </Routes>
  </div>
   <div className='div2'>
      <Link to={"/counter"}><h1>welcome</h1></Link>
      <Link to={"/korisnikp"}><h1>click</h1></Link>
    </div> */}
  
  
  // useEffect(()=>{
    //     Aos.init({duration:2000})
  //   },[])
  
  

  
  
  
  
  
  
  
  
  
  














  
  // const[isCardShown,setIsCardShown]=useState(false)

  // const[data,setData]=useState([]);

//   const[facts,setFacts]=useState([])
 
//   function getFacts() {
//     fetch("https://api.github.com/users/dzemildupljak")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.name);
//         // setFacts(data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   useEffect(() => {
//     getFacts();
//   }, []);
//   // let a=""
// return (
// <div className="container">
 
// <div>
//       {facts.map((el) => {
//         return <h1>{el.fact}</h1>;
//       })}
//     </div>
  
//  </div>
     
  

    //   <h1>TODO LIST</h1>
     
    //  <div className="unos">
     

    //   <input type="text" onChange={(e)=>{
    //     a=e.target.value
    //   }}/>
    //   <button className='dugme' onClick={()=>{
    //     setData([...data,a])
    //   }}>Submit</button>
    
    //  </div>
     
    //  {data.map((el) => {
    //    return <Card title={el} />;
    //   })} 
    






{/* //   <Router>
//      <Navbar/>
//    </Router> */}
      

  //  </div>

























    
      //  <button  onClick={()=>{
      //    setIsCardShown(!isCardShown)
      //   }}>CLICK ME</button>cd
    // {isCardShown && <Card value={"nesto"}/>} */}
    
    
    
    
 
 
}

export default App;
