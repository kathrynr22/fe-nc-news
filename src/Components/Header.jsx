import React from "react";

const Header = ({ user }) => {
  return (
    <header>
      <h1>NC News</h1>
      <h2>Welcome to NC news</h2>
      <p>You are currently signed in as: {user}</p>
    </header>
  );
};

export default Header;
