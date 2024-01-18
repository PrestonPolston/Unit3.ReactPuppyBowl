import React from "react";
import { useGetPlayersQuery } from "../../api/puppyBowlApi";

const Players = () => {
  const { data, error, isLoading } = useGetPlayersQuery();
  console.log(data);
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
            </div>
            <div className="player-details">
              <h2>{player.name}</h2>
              <p>{player.breed}</p>
              <p>{player.status}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Players;
