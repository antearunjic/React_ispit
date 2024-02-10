import { useState } from "react";
import UserDetails from "./UserDetails";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a username");
    } else {
      try {
        const userRes = await fetch(`https://api.github.com/users/${input}`);
        const userData = await userRes.json();
        setUserData(userData);

        const reposRes = await fetch(userData.repos_url);
        const reposData = await reposRes.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error while fetching user:", error);
      }
      setInput("");
    }
  };

  return (
    <div className="userSearch">
      <div className="inputForm">
        <form onSubmit={handleSubmit}>
          <p>Github username</p>
          <input
            className="searchInput"
            type="text"
            placeholder="Search user"
            onChange={handleChange}
            value={input}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {userData && <UserDetails userData={userData} repos={repos} />}
    </div>
  );
};

export default SearchInput;
