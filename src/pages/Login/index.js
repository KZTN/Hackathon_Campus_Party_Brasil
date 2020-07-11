import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./styles.scss";
import logo from '../../assets/logo.png'

function handleClick() {
}

export default function Login() {
  const [CpfField, setCpfField] = useState("");
  const [PasswordField, setPasswordField] = useState("");
  return (
    <section id="login">
      <img src={logo} alt="logo" />
      <form action="">
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
          <button onClick={handleClick}>Cadastro</button>
          </Link>
      </div>
      <span>Recuperar Senha</span>
    </section>
  );
}
