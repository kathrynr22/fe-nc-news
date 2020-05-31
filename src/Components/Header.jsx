import React from "react";

const Header = ({ username }) => {
  return (
    <header>
      <h1>NC News</h1>
      <h2>Welcome to NC news</h2>
      <p className="user-sign">You are currently signed in as: {username}</p>
    </header>
  );
};

export default Header;
