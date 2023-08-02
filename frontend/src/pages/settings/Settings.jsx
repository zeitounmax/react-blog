import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Mettre à jour ton compte</span>
          <span className="settingsDeleteTitle">Supprime ton compte</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="profilePicture">Photo de Profil</label>
          <div className="settingsPP">
            <img
              src="https://pbs.twimg.com/media/BfoFVebCUAAK9Vi.jpg"
              alt="taoRap"
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon fa-solid fa-user" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="username">Pseudo</label>
          <input type="text" placeholder="ZeitounMax" id="username" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="mthiry1@gmail.com" id="email" />
          <label htmlFor="password">Mot de Passe</label>
          <input type="password" id="password" />
          <button type="submit" className="settingsSubmit">
            Mise à jour
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
