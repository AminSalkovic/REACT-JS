import React, { useState,useEffect} from 'react';
import './App.css';
import Axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Kartica from './components/Kartica';



//useefect reakcije cele komponente na nesto
//use memo upordejuje vrednosti ako su iste nece rirenderovati ako nisu rirenderovace

const App =()=> {
  

  const axios = require("axios");
  const options = {
    method: 'GET',
  url: 'https://free-news.p.rapidapi.com/v1/search',
  params: {q: 'Elon Musk', lang: 'en'},
  headers: {
    'X-RapidAPI-Key': 'd210c91a4bmshca1b1f1261bbac8p1d939ejsne4e09850e233',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

return ( 
  <div className="container">
       <form>
        <input type="search"/> 
        <button>Choose tags</button>
       </form>

        <Kartica/>

    </div>
  );
  
  
  
  
  
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
