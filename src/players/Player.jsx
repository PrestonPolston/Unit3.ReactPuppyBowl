import React from "react";
import { useGetPlayerQuery } from "../api/puppyBowlApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useDeletePlayerMutation } from "../api/puppyBowlApi";
import Card from "@mui/material/Card";

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
    <div
      className="player"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card className="player-card" style={{ width: "100%", height: "10%" }}>
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
            <Button variant="contained">Return</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Player;
