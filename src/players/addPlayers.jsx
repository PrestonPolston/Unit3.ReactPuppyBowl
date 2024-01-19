import { useState } from "react";
import { Button } from "@mui/material";
import { useAddPlayerMutation } from "../api/puppyBowlApi";

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
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="form-label">Breed</label>
        <input
          type="text"
          className="form-control"
          name="breed"
          value={formData.breed}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="form-label">Status</label>
        <input
          type="text"
          className="form-control"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="form-label">ImageURL</label>
        <input
          type="text"
          className="form-control"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="form-label">TeamID</label>
        <input
          type="text"
          className="form-control"
          name="teamID"
          value={formData.teamID}
          onChange={handleInputChange}
        />
      </div>
      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
    </form>
  );
};

export default AddPlayers;
