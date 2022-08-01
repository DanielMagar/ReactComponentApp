import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
const APIfetchedLoader = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetch = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=0")
      .then((response) => response.json())
      .then((response) => {
        // Hide loading screen
        //to check exact behaviour of loading..
        setTimeout(() => {
          setUsers(response.data);
          setIsLoading(false);
        }, 3000);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch....");
        setIsLoading(false);
      });
  };
  const renderUser = (
    <div className="userlist-container">
      {users.map((item, index) => (
        <div className="user-container" key={index}>
          <img src={item.avatar} alt="" className="avater-img" />
          <div className="userDetail">
            <div className="first-name">{`${item.first_name}                
                                   ${item.last_name}`}</div>
            <div className="last-name">{item.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      {isLoading ? <LoadingSpinner /> : renderUser}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <div>
        <button className="spin-btn" onClick={handleFetch} disabled={isLoading}>
          Fetch Users
        </button>
      </div>
    </>
  );
};

export default APIfetchedLoader;
