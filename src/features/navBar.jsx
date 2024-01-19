import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import HouseSidingSharpIcon from "@mui/icons-material/HouseSidingSharp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <nav>
      <Button onClick={handleMenuClick}>
        <DensityMediumSharpIcon />
      </Button>
      <ul style={{ display: isMenuOpen ? "block" : "none" }}>
        <Link to="/" onClick={handleMenuClose}>
          <HouseSidingSharpIcon />
        </Link>
        <Button>
          <Link to="/addPlayer" onClick={handleMenuClose}>
            Sign Up!
          </Link>
        </Button>

        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </ul>
    </nav>
  );
};
export default Navbar;
