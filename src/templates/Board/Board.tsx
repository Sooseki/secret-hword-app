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
import RulesModal from "../../components/RulesModal/RulesModal";
import SelectPlayerModal from "../../components/SelectPlayerModal/SelectPlayerModal";

const socket = io("http://localhost:5555");

function Board() {
  const navigate = useNavigate();
  const { player, setPlayer } = useContext(UserContext);
  let tempPlayer = player;
  const [role, setRole] = useState<string>();
  const [otherPlayers, setOtherPlayers] = useState<Array<Player>>([])
  let tempOtherPlayers = otherPlayers ;
  const [isPresident, setIsPresident] = useState<boolean>(false);
  const [isChancelor, setIsChancelor] = useState<boolean>(false);
  const [mustPresidentChose, setMustPresidentChose] = useState<boolean>(false);
  const [selectedChancelor, setSelectedChancelor] = useState<Player>();
  const [selectedPresident, setSelectedPresident] = useState<Player>();
  const [hasVotedPlayers, setHasVotedPlayers] = useState<Array<Player>>([]);
  
  useEffect( () => {console.log("Test",tempOtherPlayers)}, [otherPlayers, setOtherPlayers, tempOtherPlayers] )
const updateOtherPlayersVotes = ( )=>{
  setOtherPlayers(tempOtherPlayers);
  console.log(tempOtherPlayers);
}
  const handleChancelor = (selectedPlayer:Player) => {
    setMustPresidentChose(false);
    socket.emit("selected chancelor", selectedPlayer)
  }
  const handleVote = (vote:boolean) => {
    const hasVotedPlayersNumber = hasVotedPlayers.length + 1;
    socket.emit("player vote", {vote, player, hasVotedPlayersNumber});
  }
  const startGame = (president: Player) => {
    setIsGameStarted(true);
    setSelectedPresident(president);
    if (president.playerId === player.playerId) {
      setIsPresident(true);
      setMustPresidentChose(true);
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

          if (incommingPlayer.playerId === player.playerId) {
            return;
          }
          let alreadyLoggedIn = false;
          otherPlayers.map(otherPlayer => {
            if (otherPlayer.playerId == incommingPlayer.playerId) {
              alreadyLoggedIn = true;
            }
          });
          if (!alreadyLoggedIn) {
            tempOtherPlayers = [...tempOtherPlayers, incommingPlayer]
            setOtherPlayers(tempOtherPlayers);
          }
        });

        socket.on("logged players", (players: Player[]) => {
          players.map(otherplayer => {
            if (otherplayer.playerId != player.playerId) {
              tempOtherPlayers = [...tempOtherPlayers, otherplayer]
              setOtherPlayers(tempOtherPlayers);
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

        socket.on("selected chancelor", (chancelor:Player) => {
          setSelectedChancelor(chancelor);
          setIsChancelor(player.playerId === chancelor.playerId);
        })

        socket.on("player voted", (player:Player) => {  
          setHasVotedPlayers(hasVotedPlayers => [...hasVotedPlayers, player]);
        })

        socket.on("players votes", (players:Player[]) => {
          players.map((p) => {
            tempOtherPlayers.map((otherplayer, index) => {
              if (p.playerId === otherplayer.playerId) {
                tempOtherPlayers[index].vote=p.vote;
                // setOtherPlayers(tempOtherPlayers);
                updateOtherPlayersVotes();
                console.log("this is tempOtherPlayers", tempOtherPlayers)
              }
            })
          })
          /*players.forEach(otherplayer => {
            console.log("this is other player playerID : ", otherplayer.playerId)
            console.log("this is player playerID : ", player.playerId)
            if (otherplayer.playerId !== player.playerId) {
              console.log("hasentered if")
              tempOtherPlayers.push(player);
              console.log("tempOtherplayers : ", tempOtherPlayers)

              setOtherPlayers(tempOtherPlayers);
            }
          });*/
          //console.log("this is otherplayers : ", tempOtherPlayers)
        })
      }
    }
  }, []);
  return (
    <div className="GameBoard">
      {isGameStarted && (
          <BoardComponent></BoardComponent>
      )}
      {isGameStarted && selectedPresident && selectedChancelor &&
        <VoteCardBlock eventHandler={handleVote}></VoteCardBlock>
      }

      {role && <PlayerRole role={role}></PlayerRole>}
      {player && player.username && (
        <div className="current-player-icon">
          <PlayerIcon 
            player={player}
            isSelectedChancelor={isChancelor}
            isSelectedPresident={isPresident}
          ></PlayerIcon>
        </div>
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

      {otherPlayers &&  
        <OtherPlayers 
          selectedPresident={selectedPresident} 
          selectedChancelor={selectedChancelor} 
          players={otherPlayers}
          hasVotedPlayers={hasVotedPlayers}
        ></OtherPlayers>
      }
      <RulesModal></RulesModal>
      {mustPresidentChose &&
        <SelectPlayerModal 
          eventHandler={handleChancelor}
          setSelectedChancelor={setSelectedChancelor} 
          isPresident={mustPresidentChose}
          players={otherPlayers}></SelectPlayerModal>
      }
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
