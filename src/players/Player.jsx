import React from "react";
import { useGetPlayerQuery } from "../api/puppyBowlApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useDeletePlayerMutation } from "../api/puppyBowlApi";

const Player = () => {
  const { playerid } = useParams();
  const { data, error, isLoading } = useGetPlayerQuery(playerid);
  const [deletePost] = useDeletePlayerMutation();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong...</h1>;
  }
  if (!data) {
    return <h1>No player data available</h1>;
  }

  return (
    <div className="player">
      <div key={data.data.player.id} className="player-card">
        <div className="player-image-container">
          <img
            className="player-image"
            src={data.data.player.imageUrl}
            alt={data.data.player.name}
          />
          <h3>Player Name: {data.data.player.name}</h3>
          <div className="player-details">
            <p>Breed: {data.data.player.breed}</p>
            <p>Status: {data.data.player.status} </p>
          </div>
          <Button onClick={() => deletePost(data.data.player.id)}>
            <DeleteIcon />
          </Button>
          <Link to={`/`}>
            <Button>Return</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Player;
