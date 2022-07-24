import { useState } from 'react';
import Lista from "./Lista";

import './Drop.css'

const Drop=()=>{
    const[click,setClick]=useState(false)
 
    return(
        <>
        <div className="dropdown">

                <div className='menu-icon' onClick={()=>setClick(!click)}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                 {click && <Lista/>}
             
        </div>
        </>
    )
}
export default Drop;