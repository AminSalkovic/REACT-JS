import React from "react";
import { useEffect,useState} from "react";
import Axios from "axios";
const Nina=()=>{
  const [users, setUsers] = useState([]);

  let searchValue = "";

const getGithubData = (user) => {
  Axios.get(`https://api.github.com/users/${user}`)
    .then((res) =>  setUsers([res.data]))
    .catch((er)=>{console.log(er);});
  };
useEffect(() => {
  getGithubData();
}, []);

return (
    <div style={{display:"flex"}} >
     <input  type="text" onChange={(e) => {searchValue = e.target.value;}}/>
    <button   onClick={() => {
       getGithubData(searchValue);
     }}>Submit</button>
    {users.map((user) => {
      return (
          <div className="kartica">
          <img src={user?.avatar_url}/>
          <h1>Name:{user?.name}</h1>
          <h1>Followers:{user?.followers}</h1>
          <h1>Location:{user?.location}</h1>
          <p>{user.name}</p>
        </div>
      );
    })}
  </div>
)
}

export default Nina;