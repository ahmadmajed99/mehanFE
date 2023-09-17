import React from "react";
import "./projectsDashboard.css";

import { useState } from "react";
import axios from "axios";

// import { MenuBar, Navbar } from "../../../components/navbar/Navbar";
import {
  DashboardMenuBar,
  DashboardNavbar,
} from "../../../components/dashboardNavbar/DashboardNavbar";

const ProjectsDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "https://mehan-consulting.onrender.com/api/news/add",
        formData,
        {}
      );

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <DashboardNavbar />
      {/* <DashboardMenuBar menubar={menubar} /> */}
      <div className="head-div">
        <h2>Add new News</h2>
      </div>

      <div>
        <form className="edit-section" onSubmit={handleSubmit}>
          <div className="header">
            <h1>Add News</h1>
          </div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            id="title"
            value={title}
            onChange={handleTitleChange}
          ></input>
          <label>Description:</label>
          <textarea
            type="text"
            placeholder="Description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="txtField"
          ></textarea>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" onChange={handleImageChange}></input>

          <div className="csub_button">
            <button type="submit" className="btn-contact">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProjectsDashboard;
