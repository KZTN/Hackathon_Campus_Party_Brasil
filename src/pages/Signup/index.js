import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import filleddot from "../../assets/filleddot.svg";
import emptydot from "../../assets/emptydot.svg";
import woman from "../../assets/woman.svg";

import "./styles.scss";

export default function Signup() {
  const history = useHistory();
  const [CpfField, setCpfField] = useState("");
  const [NameField, setNameField] = useState("");
  const [PasswordField, setPasswordField] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post("/usuaria/salvar", {cpf: CpfField, nome: NameField, senha: PasswordField}).then((response) => {
      localStorage.setItem('name', response.data.nome);
      localStorage.setItem('id', response.data.id);
      console.log(response.data);
      history.push("/registered")
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <section id="signup">
      <form onSubmit={handleSubmit}>
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
          type="text"
          name="name"
          id="name"
          value={NameField}
          onChange={(e) => setNameField(e.target.value)}
          placeholder="Nome"
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
          <button type="submit">Quase Lá</button>
      </form>
      <div className="signup-stage">
        <img src={filleddot} alt="dot" />
        <img src={emptydot} alt="dot" />
      </div>
    </section>
  );
}
