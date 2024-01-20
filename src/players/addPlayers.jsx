import { useState } from "react";
import { Button } from "@mui/material";
import { useAddPlayerMutation } from "../api/puppyBowlApi";
import { Card, CardContent } from "@mui/material";

const AddPlayers = () => {
  const [addNewPlayer] = useAddPlayerMutation();
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "",
    imageURL: "",
    teamID: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewPlayer(formData)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });

    setFormData({
      name: "",
      breed: "",
      status: "",
      imageURL: "",
      teamID: "",
    });
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
        margin: "auto",
        position: "fixed",
        top: "30%",
        left: "50%",
      }}
    >
      <CardContent>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="mb-3" style={{ width: "30px" }}>
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ width: "30px" }}>
            <label className="form-label">Breed</label>
            <input
              type="text"
              className="form-control"
              name="breed"
              value={formData.breed}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ width: "30px" }}>
            <label className="form-label">Status</label>
            <input
              type="text"
              className="form-control"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ width: "30px" }}>
            <label className="form-label">ImageURL</label>
            <input
              type="text"
              className="form-control"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ width: "30px" }}>
            <label className="form-label">TeamID</label>
            <input
              type="text"
              className="form-control"
              name="teamID"
              value={formData.teamID}
              onChange={handleInputChange}
            />
          </div>
          <Button
            type="submit"
            className="btn btn-primary"
            style={{ width: "30px" }}
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddPlayers;
