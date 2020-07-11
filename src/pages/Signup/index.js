import React, { useState } from "react";
import { Link } from "react-router-dom";

import filleddot from "../../assets/filleddot.svg";
import emptydot from "../../assets/emptydot.svg";
import woman from "../../assets/woman.svg";

import "./styles.scss";

export default function Signup() {
  const [CpfField, setCpfField] = useState("");
  const [PasswordField, setPasswordField] = useState("");
  return (
    <section id="signup">
      <form action="">
        <header>
          <div className="left-content">
            <div className="upper-header">
              <h1>Sobre</h1>
            </div>
            <div className="bottom-header">
              <h2>Você</h2>
            </div>
          </div>
          <div className="right-content">
            <img src={woman} alt="woman" />
          </div>
        </header>
        <input
          type="text"
          name="cpf"
          id="cpf"
          value={CpfField}
          onChange={(e) => setCpfField(e.target.value)}
          placeholder="CPF"
          minLength={11}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          value={PasswordField}
          onChange={(e) => setPasswordField(e.target.value)}
          placeholder="Senha"
          minLength={6}
          required
        />
        <Link to="/registered">
          <button type="submit">Quase Lá</button>
        </Link>
      </form>
      <div className="signup-stage">
        <img src={filleddot} alt="dot" />
        <img src={emptydot} alt="dot" />
      </div>
    </section>
  );
}
