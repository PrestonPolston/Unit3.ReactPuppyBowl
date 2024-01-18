import React from "react";
import Players from "./players/Players";
import Player from "./players/Player";
import AddPlayers from "./players/addPlayers";
import Navbar from "./features/navBar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Players />} />
        <Route path="/players/:playerid" element={<Player />} />
        <Route path="/addPlayer" element={<AddPlayers />}></Route>
      </Routes>
    </>
  );
}

export default App;
