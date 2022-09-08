import React from "react";
import PlayerIcon from "../../components/PlayerIcon/PlayerIcon";
import "./Board.scss";
import { io } from "socket.io-client";

const socket = io("http://localhost:5555");

function Board() {
  const player = {
    host: false,
    playedCell: "",
    roomId: "",
    username: "",
    socketId: "",
    turn: false,
    win: false
  };
  socket.emit("playerData", localStorage.getItem("username"));
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const roomId = urlParams.get("room");
  const form = document.querySelector("#form");
  const username = localStorage.getItem("username");
  const linkToShare = document.getElementById("link-to-share");
  const startGame = (players: any) => {
    const ennemyPlayer = players.querySelector(
      (p: any) => p.socketId != player.socketId
    );
    ennemyUsername = ennemyPlayer.username;
    console.log("start game");
    /*if (player.host && player.turn) {
      setTurnMessage('alert-info', 'alert-success', "C'est ton tour de jouer");
    } else {
      setTurnMessage('alert-success', 'alert-info', `C'est au tour de <b>${ennemyUsername}</b> de jouer`);
    }*/
  };
  console.log("room has been created", player);
  let ennemyUsername = ["test"];

  if (form && username && linkToShare) {
    form.addEventListener("submit", function (e: any) {
      e.preventDefault();

      player.username = username;
      //check if roomId is defined or not
      if (roomId) {
        player.roomId = roomId;
      } else {
        player.host = true;
        player.turn = true;
      }
      player.socketId = socket.id;
      socket.emit("playerData", player);
    });
    /*document.querySelector("#restart").addEventListener('click', function () {
      restartGame();
    })*/

    socket.on("join room", (roomId: any) => {
      player.roomId = roomId;
      linkToShare.innerHTML = `<a href="${window.location.href}?room=${player.roomId}" target="_blank">${window.location.href}?room=${player.roomId}</a>`;
    });

    socket.on("start game", players => {
      console.log(players);
      startGame(players);
    });

    socket.on("play", ennemyPlayer => {
      //insert secret-hitler logic here
    });

    /*function restartGame(players = null) {
      if (player.host && !players) {
          player.turn = true;
          socket.emit('play again', player.roomId);
      }
  
      const cells = document.getElementsByClassName('cell');
  
      for (const cell of cells) {
          cell.innerHTML = '';
          cell.classList.remove('win-cell', 'text-danger');
      }
  
      turnMsg.classList.remove('alert-warning', 'alert-danger');
  
      if (!player.host) {
          player.turn = false;
      }
  
      player.win = false;
  
      if (players) {
          startGame(players);
      }
    }*/
  }
  return (
    <div className="Board">
      {/* <PlayerIcon></PlayerIcon> */}
      <div id="link-to-share"></div>
    </div>
  );
}

export default Board;
