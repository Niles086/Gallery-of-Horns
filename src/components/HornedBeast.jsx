/* eslint-disable react/prop-types */

import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { FaHeart } from "react-icons/fa";


function HornedBeast({ title, image_url, description, onClick }) {
  const [status, setStatus] = useState("");
  const [favoriteCount, setFavoriteCount] = useState(0);

  function handleClick() {
    setStatus(status === "like" ? "dislike" : "like");
    if (status === "like") {
      setFavoriteCount(favoriteCount + 1);
    } 
    onClick(); // this is the onClick function that we passed in as a prop
  }

  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      <Image src={image_url} alt={title} rounded fluid />
      <h3>
        {title}{" "}
        <span>
          <FaHeart /> {favoriteCount}
        </span>
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default HornedBeast;
