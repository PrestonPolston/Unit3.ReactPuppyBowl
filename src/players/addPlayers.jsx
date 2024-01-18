import React, { useState } from "react";
import { Button } from "@mui/material";
import { useAddPlayerMutation } from "../api/puppyBowlApi";

const AddPlayers = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Breed: "",
    Status: "",
    imageURL: "",
    TeamID: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    puppyBowlApi(formData);

    setFormData({
      Name: "",
      Breed: "",
      Status: "",
      imageURL: "",
      TeamID: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          name="Name"
          value={formData.Name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label class="form-label">Breed</label>
        <input
          type="text"
          class="form-control"
          name="Breed"
          value={formData.Breed}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label class="form-label">Status</label>
        <input
          type="text"
          class="form-control"
          name="Status"
          value={formData.Status}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label class="form-label">ImageURL</label>
        <input
          type="text"
          class="form-control"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label class="form-label">TeamID</label>
        <input
          type="text"
          class="form-control"
          name="TeamID"
          value={formData.TeamID}
          onChange={handleInputChange}
        />
      </div>
      <Button type="submit" class="btn btn-primary">
        Submit
      </Button>
    </form>
  );
};

export default AddPlayers;
