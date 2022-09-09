import React, { Component } from "react";
import "./OtherPlayers.scss";
import userImage from "./user.png";
import { Player } from "../../types/types";
import PlayerIcon from "../PlayerIcon/PlayerIcon";

type props = {
  players: Player[];
};

const OtherPlayers = ({ players }: props) => {
  return (
    <div className="OtherPlayers">
      {Array.from(players).map((player: Player, index) => {
        return (
          <div key={index}>
            <PlayerIcon player={player}></PlayerIcon>
          </div>
        );
      })}
    </div>
  );
};

export default OtherPlayers;
