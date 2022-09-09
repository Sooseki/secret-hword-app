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
import OtherPlayers from "../../components/OtherPlayers/OtherPlayers";

const socket = io("http://localhost:5555");

function Board() {
  const navigate = useNavigate();
  const { player, setPlayer } = useContext(UserContext);
  let tempPlayer = player;
  const [role, setRole] = useState<string>();
  const [otherPlayers, setOtherPlayers] = useState<Array<Player>>([])
  const [isPresident, setIsPresident] = useState<boolean>(false);
  const startGame = (president: Player) => {
    console.log("start game");
    setIsGameStarted(true);
    if (president.playerId === player.playerId) {
      setIsPresident(true);
    } else {
      setIsPresident(false);
    }
  };

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

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
        
        tempPlayer = { ...tempPlayer, socketId: socket.id};
        setPlayer(tempPlayer);
        localStorage.setItem("socketId", socket.id);
        
        socket.emit("joinRoom", tempPlayer);

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

        socket.on("start game", president => {
          startGame(president);
        });

        socket.on("play", ennemyPlayer => {
          //insert secret-hitler logic here
        });

        socket.on("player role", (newRole:string) => {
          setRole(newRole);
        })

        console.log("working", player);
      }
    }
  }, []);
  return (
    <div className="GameBoard">
      {isGameStarted && (
        <>
          <VoteCardBlock></VoteCardBlock>
          <BoardComponent></BoardComponent>
        </>
      )}

      {role && <PlayerRole role={role}></PlayerRole>}
      {player && player.username && !isGameStarted && (
        <PlayerIcon player={player}></PlayerIcon>
      )}

      {player && player.roomId && !isGameStarted && (
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

      {otherPlayers && <OtherPlayers players={otherPlayers}></OtherPlayers>}
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
