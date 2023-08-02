import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-mastodon" />
        <i className=" topIcon fa-brands fa-linkedin" />
        <i className="topIcon fa-brands fa-twitter" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Accueil
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              A propos
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Ecrire
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://pbs.twimg.com/media/Fsn_ENsaAAQsgoN.jpg"
            alt="avatar "
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Connexion
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                S'inscrire
              </Link>
            </li>
          </ul>
        )}
        <i className=" topSearchIcon fa-solid fa-magnifying-glass" />
      </div>
    </div>
  );
}
