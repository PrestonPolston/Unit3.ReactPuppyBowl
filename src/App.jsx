import React from "react";
import Players from "./players/Players";
import Player from "./players/Player";
import AddPlayers from "./players/addPlayers";
import Navbar from "./features/navBar";
import puppybowl from "./puppybowl.jpeg";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${puppybowl})` }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/players/:playerid" element={<Player />} />
          <Route path="/addPlayer" element={<AddPlayers />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
