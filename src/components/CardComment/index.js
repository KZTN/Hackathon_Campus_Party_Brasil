import React from "react";
import { FaUser } from "react-icons/fa";
import "./styles.scss";

function CardComment({ author, comment, rate }) {
  return (
    <section id="cardcomment">
      <div className="left-content">
        <FaUser size={48} color="#333" />
      </div>
      <div className="right-content">
        <strong>{author? author: "Anônimo"}</strong>
        <p>{comment}</p>
        <span>Nota: {rate}</span>
      </div>
    </section>
  );
}

export default CardComment;
