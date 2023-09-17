import React from "react";
import "./news.css";
import axios from "axios";
import { useEffect, useState } from "react";
import image1 from "../../assets/projectmanager.jpg";
import image2 from "../../assets/DSC02121-min.jpg";
import image3 from "../../assets/mehanexperience.jpg";

const News = () => {
  const [data, setData] = useState([]);
  // const [ImgUrl, setImgUrl] = useState({});

  const HandleGetNews = async () => {
    try {
      const response = await axios.get(
        "https://mehan-consulting.onrender.com/api/news"
      );
      const reverseData = response.data.reverse();
      setData(reverseData);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    HandleGetNews();
  }, [data]);

  return (
    <div className="news-container">
      {/* {data.map((item) => ( */}

      <div className="news-wrapper">
        <h1 className="news-title">Project Manager</h1>
        <img className="news-image" src={image3} />
        <p className="news-description">
          Mehan Consulting is dedicated to constantly improving and expanding
          our capabilities to better serve our clients.
        </p>
      </div>
      <div className="news-wrapper">
        <h1 className="news-title">Our Opportunities</h1>
        <img className="news-image" src={image2} />
        <p className="news-description">
          As part of this commitment, we are actively exploring opportunities to
          collaborate with firms in other countries to expand our global reach
          and better understand diverse industries and geographies.
        </p>
      </div>
      <div className="news-wrapper">
        {/* <h1 className="news-title">projectmanager</h1>
        <img
          className="news-image"
          src={`https://mehan-consulting.onrender.com/${item.image.slice(
            7,
            100
          )}`}
        />
        <p className="news-description">{item.description}</p> */}

        <h1 className="news-title">Mehan's Consulting</h1>
        <img className="news-image" src={image1} />
        <p className="news-description">
          Mehan Consulting has a strong international network and collaborates
          with large firms to provide clients with comprehensive solutions that
          meet international standards. Their expertise and innovative approach
          have led to successful deals with businesspeople around the globe,
          enabling them to expand their services and reach new markets. Mehan
          Consulting's client-focused approach and commitment to delivering
          tailored solutions have established them as a trusted partner for
          businesses seeking to grow and thrive in a dynamic global environment.
        </p>
      </div>

      {/* ))} */}
    </div>
  );
};

export default News;
