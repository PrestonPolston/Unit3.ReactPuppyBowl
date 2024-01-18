import React from "react";
import Players from "./features/players/Players";
import { Routes, Route } from "react-router-dom";
import { useGetPlayersQuery, useGetPlayerQuery } from "./api/puppyBowlApi";

function App() {
  return (
    <>
      <h1>Puppy Bowl</h1>
      <Routes>
        <Route path="/" element={<Players />} />
      </Routes>
    </>
  );
}

export default App;
