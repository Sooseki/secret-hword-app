import React, { Component } from "react";
import "./PlayerIcon.scss";
import userImage from "./user.png";
import { Player } from "../../types/types";

type PlayerIcon = {
  playerName: string;
};

type props = {
  player: Player;
};
const PlayerIcon = ({ player }: props) => {
  return (
    <div className="playerComponent">
      <img src={userImage} alt="user-image"></img>
      <h1 className="playerName">{player.username}</h1>
    </div>
  );
};

export default PlayerIcon;
