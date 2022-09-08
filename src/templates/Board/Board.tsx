import React, { useEffect, useContext, useState } from "react";
import PlayerIcon from "../../components/PlayerIcon/PlayerIcon";
import "./Board.scss";
import { io } from "socket.io-client";
import { UserContext } from "../../themeContext";
import { useNavigate, Link } from "react-router-dom";
import { Player } from "../../types/types";

const socket = io("http://localhost:5555");
function Board() {
  const navigate = useNavigate();
  const { player, setPlayer } = useContext(UserContext);
  console.log(player);
  const [otherPlayers, setOtherPlayers] = useState<Set<Player>>(new Set([]));
  const startGame = (players: any) => {
    console.log("start game");
  };

  useEffect(() => {
    console.log("player" + player.username);
    // gets in if you're creating room else you're joining room
    if (player.roomId === "" && !localStorage.getItem("isRoomCreated")) {
      navigate("/rooms", { replace: true });
      console.log("Tu rentre ?");
    } else {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const roomId = urlParams.get("room");

      if (player.username) {
        console.log("has entered function");

        //check if roomId is defined or not
        if (roomId) {
          localStorage.setItem("roomId", roomId);
          setPlayer({ ...player, roomId: roomId });
        } else {
          setPlayer({ ...player, host: true });
          setPlayer({ ...player, turn: true });
          localStorage.setItem("host", "true");
          localStorage.setItem("turn", "true");
        }
        socket.emit("joinRoom", player);

        setPlayer({ ...player, socketId: socket.id });
        localStorage.setItem("socketId", socket.id);

        socket.on("get room", (roomId: string) => {
          localStorage.setItem("roomId", roomId);
          setPlayer({ ...player, roomId: roomId });
          console.log("room id" + roomId);
        });

        socket.on("player join", (otherPlayer: Player) => {
          if (otherPlayer.socketId === player.socketId) {
            return;
          }
          setOtherPlayers(otherPlayers?.add(otherPlayer));
        });

        socket.on("logged players", (players: Player[]) => {
          players.map(otherplayer => {
            if (otherplayer.socketId != player.socketId) {
              setOtherPlayers(otherPlayers.add(otherplayer));
            }
          });
        });

        socket.on("start game", players => {
          console.log("start game");
          startGame(players);
        });

        socket.on("play", ennemyPlayer => {
          //insert secret-hitler logic here
        });

        console.log("working", player);
      }
    }
  }, [otherPlayers]);
  return (
    <div className="Board">
      {player && player.username && <PlayerIcon player={player}></PlayerIcon>}
      {player && player.roomId && (
        <div id="link-to-share">
          <Link
            to={{
              pathname: "/?room=" + player.roomId
            }}
          >
            http://localhost:3001/?room={player.roomId}
          </Link>
        </div>
      )}
      <div className="otherPlayer">
        {otherPlayers &&
          Array.from(otherPlayers).map((player: Player) => {
            console.log("oui");
            return <PlayerIcon player={player}></PlayerIcon>;
          })}
      </div>
    </div>
  );
}

export default Board;

/*document.querySelector("#restart").addEventListener('click', function () {
  restartGame();
})*/

/*
function restartGame(players = null) {
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
}
*/
