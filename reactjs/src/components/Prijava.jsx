 import { useState } from "react";
const Prijava=()=>{

    
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
        <p>{value.email}</p>
      </div>
      </div>
)
 }

 export default Prijava