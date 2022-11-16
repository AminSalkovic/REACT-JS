import React,{useState} from 'react'

const AddQuote = () => {
    const[addheading,setAddheading]=useState([]);

    const heading2=[]
          heading2.push(addheading)
  return (
    <div>
         <input type="text" placeholder='addd' onChange={(e)=>setAddheading(e.target.value)} />
        <button>sasa</button>
     </div>
  )
}

export default AddQuote