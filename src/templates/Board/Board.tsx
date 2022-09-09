import { useEffect, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { default as BoardComponent } from "../../components/Board/Board";
import PlayerIcon from "../../components/PlayerIcon/PlayerIcon";
import PlayerRole from "../../components/PlayerRole/PlayerRole";
import VoteCardBlock from "../../components/VoteCardBlock/VoteCardBlock";
import { UserContext } from "../../themeContext";
import { io } from "socket.io-client";
import { Player } from "../../types/types";
import "./Board.scss";

const socket = io("http://localhost:5555");

function Board() {
  const navigate = useNavigate();
  const { player, setPlayer } = useContext(UserContext);
  let tempPlayer = player;
  const [otherPlayers, setOtherPlayers] = useState<Array<Player>>([]);
  const startGame = (players: any) => {
    console.log("start game");
  };

  useEffect(() => {
    // gets in if you're creating room else you're joining room
    if (player.roomId === "" && !localStorage.getItem("isRoomCreated")) {
      navigate("/rooms", { replace: true });
    } else {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const roomId = urlParams.get("room");

      if (player.username) {
        console.log("has entered function");

        //check if roomId is defined or not
        if (roomId) {
          localStorage.setItem("roomId", roomId);
          tempPlayer = { ...player, roomId: roomId };
          setPlayer(tempPlayer);
        } else {
          setPlayer({ ...player, host: true });
          setPlayer({ ...player, turn: true });
          localStorage.setItem("host", "true");
          localStorage.setItem("turn", "true");
        }
        socket.emit("joinRoom", tempPlayer);

        setPlayer({ ...player, socketId: socket.id });
        localStorage.setItem("socketId", socket.id);

        socket.on("get room", (roomId: string) => {
          localStorage.setItem("roomId", roomId);
          setPlayer({ ...player, roomId: roomId });
        });

        socket.on("player join", (incommingPlayer: Player) => {
          // console.log("incomming player " + incommingPlayer.playerId);

          if (incommingPlayer.playerId === player.playerId) {
            return;
          }
          let alreadyLoggedIn = false;
          otherPlayers.map(otherPlayer => {
            // console.log(otherPlayer.playerId + "+" + incommingPlayer.playerId);
            if (otherPlayer.playerId == incommingPlayer.playerId) {
              alreadyLoggedIn = true;
            }
          });
          if (!alreadyLoggedIn) {
            setOtherPlayers(otherPlayers => [...otherPlayers, incommingPlayer]);
          }
        });

        socket.on("logged players", (players: Player[]) => {
          setOtherPlayers([]);

          players.map(otherplayer => {
            if (otherplayer.playerId != player.playerId) {
              setOtherPlayers(otherPlayers => [...otherPlayers, otherplayer]);
            }
          });
        });

        socket.on("start game", players => {
          startGame(players);
        });

        socket.on("play", ennemyPlayer => {
          //insert secret-hitler logic here
        });

        console.log("working", player);
      }
    }
  }, []);
  return (
    <div className="GameBoard">
      {/* <PlayerRole user={player}></PlayerRole> */}
      <VoteCardBlock></VoteCardBlock>
      <BoardComponent></BoardComponent>
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
          Array.from(otherPlayers).map((player: Player, index) => {
            return (
              <div key={index}>
                <PlayerIcon player={player}></PlayerIcon>
              </div>
            );
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
