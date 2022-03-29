import React from "react";
import { Link } from "react-router-dom";
import CoustomLink from "../CoustomLink/CoustomLink";

const Header = () => {
  return (
    <div>
      <h2>Welcome to my fancy Routing......!!</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        {/* <CoustomLink to="/home">Home</CoustomLink>
        <CoustomLink to="/friends">Friends</CoustomLink>
        <CoustomLink to="/about">About</CoustomLink> */}
      </nav>
    </div>
  );
};

export default Header;
