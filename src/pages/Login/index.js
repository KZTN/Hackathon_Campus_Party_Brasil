import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import "./styles.scss";
import logo from "../../assets/logo.png";

export default function Login() {
  const history = useHistory();
  const [CpfField, setCpfField] = useState("");
  const [PasswordField, setPasswordField] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await api
      .get(`/api/login/${CpfField}/${PasswordField}`)
      .then((response) => {
        localStorage.setItem("name", response.data.nome);
        localStorage.setItem("id", response.data.id);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (localStorage.getItem("id")) {
      history.push("/dashboard");
    }
  });
  return (
    <section id="login">
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Entrar</button>
      </form>

      <div className="section-actions">
        <Link to="/signup">
          <button>Cadastro</button>
        </Link>
      </div>
      <span>Recuperar Senha</span>
    </section>
  );
}
