import React from "react";
import {Link} from 'react-router-dom';
import emptydot from "../../assets/emptydot.svg";
import filleddot from "../../assets/filleddot.svg";
import crown from "../../assets/crown.svg";

import "./styles.scss";
export default function Registered() {
  return (
    <section id="registered">
      <div className="plate">
        <header>PRONTINHO!</header>
        <img src={crown} alt="crown" />
        <Link to="/dashboard">
        <button>Começe agora</button>
        </Link>
      </div>
      <div className="signup-stage">
        <img src={emptydot} alt="dot" />
        <img src={filleddot} alt="dot" />
      </div>
    </section>
  );
}
