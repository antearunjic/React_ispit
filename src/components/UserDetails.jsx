import React from "react";

const UserDetails = ({ userData, repos }) => {
  return (
    <div className="userDetails">
      <div className="userInfo">
        <h2>USER DETAILS:</h2>
        <img src={userData.avatar_url} alt="User Avatar" />
        <div className="userULB">
          <p>Username: {userData.name}</p>
          <p>Location: {userData.location}</p>
          <p>Bio: {userData.bio}</p>
        </div>
      </div>
      <div className="userRepos">
        <h3>REPOSITORIES:</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
