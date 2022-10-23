import React, { useState,useEffect} from 'react';
import './App.css';
import { Route,Routes,Link} from 'react-router-dom';
import Axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';

//useefect reakcije cele komponente na nesto
//use memo upordejuje vrednosti ako su iste nece rirenderovati ako nisu rirenderovace


const App =()=> {
  
  const[data,setData]=useState([])

  const getData=()=>{
    axios.get('https://seo-api.p.rapidapi.com/v1/serp')
    .then((res)=> setData(res.data))
    .catch((err)=> console.log(err));
  }
  
  useEffect(()=>{
      getData();
  },[])
  return ( 
    <>
      {data.map((item,index)=>{
        <li key={index}>
          <span>{item.emial}</span>
          <p>sassa</p>
              <p>mm</p>
         </li>
      })}
    </>
  );
  
  co
  

  
  
  
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
    



 //sddddssd


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
