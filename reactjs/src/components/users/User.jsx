import React,{useEffect,useState} from 'react'
import './User.css'
import  Axios  from 'axios'

export default function User() {

    const [users, setUsers] = useState([]);

    let searchValue = "";

  const getGithubData = (user) => {
    Axios.get(`https://api.github.com/users/${user}`)
      .then((res) =>  setUsers([res.data])).catch((er)=>{console.log(er);});
    };
  useEffect(() => {
    getGithubData();
  }, []);

  return (
      <div style={{display:"flex"}} >
       <input data-aos="fade-up-right" type="text" onChange={(e) => {searchValue = e.target.value;}}/>
      <button  data-aos="fade-down-left" onClick={() => {
         getGithubData(searchValue);
       }}>Submit</button>
      {users.map((user) => {
        return (
            <div className="kartica">
            <img src={user?.avatar_url} />
            <h1>Name:{user?.name}</h1>
            <h1>Followers:{user?.followers}</h1>
            <h1>Location:{user?.location}</h1>
          </div>
        );
      })}
        </div>
 )
}
