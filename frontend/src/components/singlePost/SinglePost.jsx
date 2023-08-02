import React from "react";
import "./singlePost.css"; // Chemin correct vers le fichier singlepost.css

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/12685141/pexels-photo-12685141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="building from jkt"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-solid fa-pen-to-square" />
            <i className=" singlePostIcon fa-solid fa-trash" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Auteur: <b>Maximilien</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sit
          atque harum fugiat vitae vel, repellendus, magnam accusantium
          voluptatum explicabo obcaecati non eum vero nostrum, aliquid illum
          totam alias illo. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Dicta sit atque harum fugiat vitae vel, repellendus, magnam
          accusantium voluptatum explicabo obcaecati non eum vero nostrum,
          aliquid illum totam alias illo. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Dicta sit atque harum fugiat vitae vel,
          repellendus, magnam accusantium voluptatum explicabo obcaecati non eum
          vero nostrum, aliquid illum totam alias illo.
        </p>
      </div>
    </div>
  );
}
