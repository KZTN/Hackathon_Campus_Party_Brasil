import React from "react";
import {useHistory} from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import "./styles.scss";

export default function CardMap({ thumbnail, name, address, city, comments, rating=0 }) {
  const history = useHistory();
  function handleClick() {
    history.push({
      pathname: "/establishment",
      state: { thumbnail, name, address, city, comments, rating }
    });
  }
  return (
    <section id="cardmap" onClick={handleClick}>
      <div className="left-content">
        <img
          src={thumbnail}
          alt={name}
        />
      </div>
      <div className="right-content">
        <span>{name}</span>
        <p>{address}</p>
        <strong>{city}</strong>
        <div className="hearts">
         {[...Array(parseInt(rating))].map((e, i) => <FaHeart size={28} color="#ff6243" />)} 
        </div>
      </div>
    </section>
  );
}
