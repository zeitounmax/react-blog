import React from "react";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/3679490/pexels-photo-3679490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="chain"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fa-solid fa-plus" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Titre" className="writeInput" />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Raconte ton histoire"
            type="text"
            className="writeInput writeText"
          />
        </div>
        <button type="button" className="writeSubmit">
          Publié
        </button>
      </form>
    </div>
  );
}
