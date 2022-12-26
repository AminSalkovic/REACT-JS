import React, { useState,useEffect} from 'react';
import './App.css';
import { Route,Routes,Link} from 'react-router-dom';
import Axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';
import AddQuote from './components/quotes/AddQuote';
import Cardlist from './components/quotes/Cardlist';



//useefect reakcije cele komponente na nesto
//use memo upordejuje vrednosti ako su iste nece rirenderovati ako nisu rirenderovace
 //https://api.github.com/users/${user}

const App =()=> {

const some=''
      
  return ( 
    <>
       <Cardlist />
       <AddQuote/>
    </>
  );

 
}

export default App;
