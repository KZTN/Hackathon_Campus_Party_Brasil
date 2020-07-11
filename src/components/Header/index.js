import React from "react";

import friends1 from "../../assets/friends1.svg";
import friends2 from "../../assets/friends2.svg";

import "./styles.scss";

export default function Header() {
  return (
    <section id="header">
      <div className="images">
        <img src={friends1} alt="friends" />
        <img src={friends2} alt="friends" />
      </div>
      <header>
        <div className="upper-header">
          <span>Lugares</span>
        </div>
        <div className="bottom-header">
          <span>Amigáveis</span>
        </div>
      </header>
      <footer>
        <span>Confira locais confiáveis e seguros</span>
      </footer>
    </section>
  );
}
