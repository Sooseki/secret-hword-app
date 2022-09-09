import React, { Component } from "react";
import "./OtherPlayers.scss";
import userImage from "./user.png";
import { Player } from "../../types/types";
import PlayerIcon from "../PlayerIcon/PlayerIcon";

type props = {
  players: Player[];
  selectedChancelor?: Player;
  selectedPresident?: Player;
  hasVotedPlayers: Player[];
};

const OtherPlayers = ({ players, selectedChancelor, selectedPresident, hasVotedPlayers }: props) => {
  return (
    <div className="OtherPlayers">
      {Array.from(players).map((player: Player, index) => {
        let hasVoted = false;
        hasVotedPlayers.map((hasVotedPlayer) => {
          if (hasVotedPlayer.playerId === player.playerId) {
            hasVoted = true;
          }
        })
        return (
          <div key={index}>
            <PlayerIcon 
              isSelectedChancelor={selectedChancelor && player.playerId === selectedChancelor.playerId} 
              player={player}
              isSelectedPresident={selectedPresident && player.playerId === selectedPresident.playerId}
              hasVoted={hasVoted}
            ></PlayerIcon>
          </div>
        );
      })}
    </div>
  );
};

export default OtherPlayers;
