import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Connexion</span>
      <form className="loginForm">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="loginInput"
          type="text"
          placeholder="Entre ton mail..."
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          className="loginInput"
          type="password"
          placeholder="Entre ton mot de passe..."
        />
        <button type="submit" className="loginButton">
          Connexion
        </button>
      </form>
      <button type="button" className="loginRegisterButton">
        <Link className="link" to="/register">
          S'inscrire
        </Link>
      </button>
    </div>
  );
}
