import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import CardComment from "../../components/CardComment";
import "./styles.scss";

export default function Establishment(props) {
  const [Comments, setComments] = useState(props.location.state.comments);
  const [Anonym, setAnonym] = useState(false);
  const [Comment, setComment] = useState("");
  const [Rating, setRating] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    if (Anonym) {
      setComments([
        ...Comments,
        {
          comment: Comment,
          rating: Rating,
          author: "Anônimo",
        },
      ]);
    } else {
      setComments([
        ...Comments,
        {
          comment: Comment,
          rating: Rating,
          author: localStorage.getItem("name"),
        },
      ]);
    }
  }
  return (
    <section id="establishment">
      <header>
        <Link to="/dashboard">
          <button>
            <FaChevronLeft size={28} color="#ff63b1" />
          </button>
        </Link>
        <h1>EXPERIÊNCIA</h1>
      </header>
      <div className="resume">
        <img src={props.location.state.thumbnail} alt="" />
        <h1>{props.location.state.name}</h1>
        <h3>{props.location.state.address}</h3>
        <h3>{props.location.state.city}</h3>
        <span style={{ display: "flex", alignItems: "center" }}>
          Avaliação geral: {props.location.state.rating}{" "}
          <FaHeart size={18} color="#ff6243" style={{ marginLeft: 5 }} />{" "}
        </span>
      </div>

      <div className="comments">
        <header>
          <h2>Comentários</h2>
        </header>
        <div className="comment-list">
          {Comments.map((comment) => (
            <CardComment
              author={comment.author}
              rating={comment.rating}
              comment={comment.comment}
            />
          ))}
        </div>
      </div>
      <div className="make-a-comment">
        <header>
          <h2>Faça um comentário</h2>
        </header>
        <div className="comment">
          <form onSubmit={handleSubmit}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Conte como foi sua experiência para mais mulheres..."
              value={Comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <div className="wrapper">
              <div>
                <label htmlFor="rate">Nota: </label>
                <input
                  type="number"
                  id="rate"
                  name="rate"
                  placeholder="0"
                  min="1"
                  max="5"
                  value={Rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="anonym">Manter anonimato:</label>
                <input
                  type="checkbox"
                  id="anonym"
                  name="anonym"
                  value={Anonym}
                  onChange={(e) => setAnonym(e.target.value)}
                />
              </div>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
