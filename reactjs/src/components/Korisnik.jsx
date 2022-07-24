import { useState } from 'react';
import Koirniskp from './Korisnikp';
import './Korisnik.css'
const Korisnik=()=>{
    const [isCardShown,setIsCardShown]=useState(false)
    return(
       <div className="karticakorisnika">
        
        <input type="text" />
        <button  onClick={setIsCardShown(!isCardShown)}>ADD</button>
        {isCardShown && <Koirniskp/>}
        {/* //for delete */}
      
    </div>

    )
}

export default Korisnik;