import React from "react";
import { Link } from "react-router-dom";
import { useGetPlayersQuery } from "../api/puppyBowlApi";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { CardMedia } from "@mui/material";

const Players = () => {
  const { data, error, isLoading } = useGetPlayersQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Try Again Later...</h1>;
  }

  return (
    <div
      className="players"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "20px",
      }}
    >
      {data.data.players &&
        data.data.players.map((player) => (
          <Card key={player.id} sx={{ width: "10%", paddingBottom: "10px" }}>
            <CardMedia
              component="img"
              height="14"
              image={player.imageUrl}
              alt={player.name}
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Player Name: {player.name}
              </Typography>
              <Typography variant="h5" component="div">
                <CardActions>
                  <Link to={`/players/${player.id}`}>
                    <Button variant="contained">Details</Button>
                  </Link>
                </CardActions>
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default Players;
