import React, { Component } from "react";
import "./PlayerIcon.scss";
import userImage from "./user.png";
import { Player } from "../../types/types";



type props = {
  player: Player;
  isSelectedChancelor?: boolean
  isSelectedPresident?: boolean
  hasVoted?: boolean
};

const PlayerIcon = ({ player, isSelectedChancelor, isSelectedPresident, hasVoted = false}: props) => {
  return (
    <div className="playerComponent">
      <img src={userImage} alt="user-image"></img>
      <h1 className="playerName">{player.username}</h1>
      {isSelectedChancelor && 
        <div className="chancelor-candidate">Chancelor candidate</div>
      }
      {isSelectedPresident && 
        <div className="president-candidate">President candidate</div>
      }
      {hasVoted && 
      <div className="playerHasVoted">Voted !</div>}
      {player && (player.vote === true || player.vote === false) && 
        <div className="players-votes">{player.vote}</div>
      }
    </div>
  );
};

export default PlayerIcon;
