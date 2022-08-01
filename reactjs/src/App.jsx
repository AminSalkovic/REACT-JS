import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'






//useefect reakcije cele komponente na nesto
const App =()=> {

  const[data,setData]=useState([])
    
  useEffect(() => {
   Axios.get("https://api.github.com/users/aminsalkovic").
   then((response)=>{
    setData([response.data]) 
   }).catch(err=>
       console.log(err));
   
  }, [])
  
  
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
   
       
    <div className="container">
            {data.map((user)=>{
              return(

                  <>
                <h1>{user?.name}</h1>
                <h1>{user?.followers}</h1>
                  </>
                 
              )
            })}
    </div>
  );
































  
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
