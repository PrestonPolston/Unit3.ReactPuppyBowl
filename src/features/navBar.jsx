import { Button, Stack, Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import HouseSidingSharpIcon from "@mui/icons-material/HouseSidingSharp";
import { AlignHorizontalRight } from "@mui/icons-material";
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
    <div
      className="NavBar"
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        left: "0",

        zIndex: 999,
      }}
    >
      <nav>
        <Button variant="contained" onClick={handleMenuClick}>
          <DensityMediumSharpIcon />
        </Button>
        <Box sx={{ position: "relative", left: "1px" }}>
          <input
            className="searchBar"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ position: "absolute", right: "5px" }}
          />
        </Box>
        <ul style={{ display: isMenuOpen ? "block" : "none" }}>
          <Link to="/" onClick={handleMenuClose}>
            <HouseSidingSharpIcon />
          </Link>
          <Button className="NavBar-Button">
            <Link to="/addPlayer" onClick={handleMenuClose}>
              Sign Up!
            </Link>
          </Button>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
