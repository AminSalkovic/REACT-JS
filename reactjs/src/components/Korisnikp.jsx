import { useEffect, useState } from "react";
import './Korisnikp.css'

const GithubCard = () => {
  const [users, setUsers] = useState([]);
  let searchValue = "";

  const getGithubData = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers([...users, data]);
      });
  };
  useEffect(() => {
    getGithubData();
  },[]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          searchValue = e.target.value;
        }}
      />
      <button
      >
        Submit
      </button>
      {users.map((user) => {
        return (
          <div style={{ backgroundImage: `url(${user?.avatar_url})` }}>
            <h1>{user?.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default GithubCard;
