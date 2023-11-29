/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { FaHeart } from "react-icons/fa";

export default function HornedBeast(props) {
  const [status, setStatus] = useState("");
  const [favoriteCount, setFavoriteCount] = useState(0);

  function handleClick() {
    setStatus(status === "like" ? "dislike" : "like");
    if (status === "like") {
      setFavoriteCount(favoriteCount + 1);
    } else {
      setFavoriteCount(favoriteCount - 1);
    }
  }

  return (
    <div onClick={handleClick}>
      <Image src={props.image_url} alt={props.title} rounded fluid />
      <h3>
        {props.title}{" "}
        <span>
          <FaHeart /> {favoriteCount}
        </span>
      </h3>
      <p>{props.description}</p>
    </div>
  );
}
