import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">S'inscrire</span>
      <form className="registerForm">
        <label htmlFor="username">Pseudo</label>
        <input
          id="username"
          className="registerInput"
          type="text"
          placeholder="Entre ton pseudo..."
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="registerInput"
          type="text"
          placeholder="Entre ton mail..."
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          className="registerInput"
          type="password"
          placeholder="Entre ton mot de passe..."
        />
        <button type="submit" className="registerButton">
          S'inscrire
        </button>
      </form>
      <button type="button" className="registerLoginButton">
        <Link className="link" to="/login">
          Connexion
        </Link>
      </button>
    </div>
  );
}
