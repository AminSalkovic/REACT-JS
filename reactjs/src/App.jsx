import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'
import Korisnik from './components/Korisnik'
import Korisnikp from './components/Korisnikp';


//useefect reakcije cele komponente na nesto
const App =()=> {
  let formValue = {
    name: "",
    email: "",
    lastName: "",
  };

  const [value, setValue] = useState({
    name: "",
    email: "",
    lastName: "",
  });

  return (
    <div>
      <input
        type="text"
        placeholder="firstName"
        onChange={(e) => {
          formValue.name = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="lastname"
        onChange={(e) => {
          formValue.lastName = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          formValue.email = e.target.value;
        }}
      />
      <button
        onClick={() => {
          if (formValue.name && formValue.lastName && formValue.email) {
            console.log(formValue);
            setValue(formValue);
          } else {
            console.log("Please fill all the fields");
          }
        }}
      >
        Submit
      </button>

      <div>
        <h1>{value.name}</h1>
        <h1>{value.lastName}</h1>
        <h1>{value.email}</h1>
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
