import React from "react";
import { Link } from "react-router-dom";
import { useGetPlayersQuery } from "../api/puppyBowlApi";
import { Button } from "@mui/material";

const Players = () => {
  const { data, error, isLoading } = useGetPlayersQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Try Again Later...</h1>;
  }

  return (
    <div className="players">
      {data.data.players &&
        data.data.players.map((player) => (
          <div key={player.id} className=" player-card">
            <div className="player-image-container">
              <img
                className="player-image"
                src={player.imageUrl}
                alt={player.name}
              />
              <h3>Player Name: {player.name}</h3>
            </div>
            <Link to={`/players/${player.id}`}>
              <Button>Details</Button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Players;
