import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Korsnikp from './components/Korisnikp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import  Drop from './components/Drop';





//useefect reakcije cele komponente na nesto
const App =()=> {
  const  options={
    method:'GET',
    url:"https://numbersapi.p.rapidapi.com/6/21/date",
    params:{fragment:"true",json:"true"},
    headers:{
    }
  };
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
   
       
    <div className="container">
              
              <div className="grids">
                <div className="boxex">1</div>
                <div className="boxex">2</div>
                <div data-aos="fade-up" className="boxex">3</div>
                <div  data-aos="fade-down"className="boxex">4</div>
                <div  data-aos="zoom-in" className="boxex">5</div>
                <div  data-aos="zoom-in-up"  className="boxex">6</div>
                <div className="boxex">6</div>
                <div className="boxex">6</div>
                <Drop />
                <div className="boxex">6</div>
                <div className="boxex">6</div>
              </div>
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
