import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/addPlayer">
          <Button>Sign Up!</Button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
