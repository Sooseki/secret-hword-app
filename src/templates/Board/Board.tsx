import { useEffect, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { default as BoardComponent } from "../../components/Board/Board";
import { UserContext } from "../../themeContext";
import { io } from "socket.io-client";
import { Player } from "../../types/types";
import PlayerIcon from "../../components/PlayerIcon/PlayerIcon";
import PlayerRole from "../../components/PlayerRole/PlayerRole";
import VoteCardBlock from "../../components/VoteCardBlock/VoteCardBlock";
import OtherPlayers from "../../components/OtherPlayers/OtherPlayers";
import RulesModal from "../../components/RulesModal/RulesModal";
import SelectPlayerModal from "../../components/SelectPlayerModal/SelectPlayerModal";
import VoteResultModal from "../../components/VoteResultModal/VoteResultModal";
import SelectCardModal from "../../components/SelectCardModal/SelectCardModal";
import VictoryModal from "../../components/VictoryModal/VictoryModal";
import LinkToShare from "../../components/LinkToShare/LinkToShare";
import "./Board.scss";

import { SvgCards } from "../../assets/svg_tsx/SvgCards"
import { Rules } from "../../components/Rules"
import bookIcon from "../../assets/svg/book.svg"
import Title from "../../assets/imgs/banner.png"

const socket = io("http://localhost:5555")

const Board = () => {
  const navigate = useNavigate();
  const { player, setPlayer } = useContext(UserContext);
  const [otherPlayers, setOtherPlayers] = useState<Array<Player>>([])
  const [displayRules, setDisplayRules] = useState<boolean>(false)
  const [isPresident, setIsPresident] = useState<boolean>(false);
  const [isChancelor, setIsChancelor] = useState<boolean>(false);
  const [selectedChancelor, setSelectedChancelor] = useState<Player>();
  const [selectedPresident, setSelectedPresident] = useState<Player>();
  const [hasVotedPlayers, setHasVotedPlayers] = useState<Array<Player>>([]);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [mustVote, setMustVote] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<string>();
  let tempPlayer = player;
  let tempOtherPlayers = otherPlayers;
  const showRules = () => {
    setDisplayRules(!displayRules)
  }

  const resetVotes = () => {
    tempPlayer = { ...player, vote: undefined };
    setPlayer(tempPlayer);
    setHasVotedPlayers([]);
  }

  const startTurn = (president: Player) => {
    setMustVote(true);
    setSelectedPresident(president);
    if (president.playerId === player.playerId) {
      setIsPresident(true);
    }
  }

  useEffect(() => {
    // gets in if you're creating room else you're joining room
    if (player.roomId === "" && !localStorage.getItem("isRoomCreated")) {
      navigate("/rooms", { replace: true })
    } else {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)
      const roomId = urlParams.get("room")

      if (player.username) {
        //check if roomId is defined or not
        if (roomId) {
          localStorage.setItem("roomId", roomId)
          tempPlayer = { ...player, roomId: roomId }
          setPlayer(tempPlayer)
        } else {
          setPlayer({ ...player, host: true })
          setPlayer({ ...player, turn: true })
          localStorage.setItem("host", "true")
          localStorage.setItem("turn", "true")
        }

        tempPlayer = { ...tempPlayer, socketId: socket.id }
        setPlayer(tempPlayer)
        localStorage.setItem("socketId", socket.id)

        socket.emit("joinRoom", tempPlayer)

        socket.on("get room", (roomId: string) => {
          localStorage.setItem("roomId", roomId)
          setPlayer({ ...player, roomId: roomId })
        })

        socket.on("player join", (incommingPlayer: Player) => {

          if (incommingPlayer.playerId === player.playerId) return;

          let alreadyLoggedIn = false;
          otherPlayers.map(otherPlayer => {
            if (otherPlayer.playerId == incommingPlayer.playerId) {
              alreadyLoggedIn = true
            }
          });

          if (!alreadyLoggedIn) {
            tempOtherPlayers = [...tempOtherPlayers, incommingPlayer]
            setOtherPlayers(tempOtherPlayers)
          }
        })

        socket.on("logged players", (players: Player[]) => {
          players.map((otherplayer) => {
            if (otherplayer.playerId != player.playerId) {
              tempOtherPlayers = [...tempOtherPlayers, otherplayer]
              setOtherPlayers(tempOtherPlayers)
            }
          })
        })

        socket.on("start game", president => {
          setIsGameStarted(true);
          startTurn(president);
        })

        socket.on("selected chancelor", (chancelor: Player) => {
          setSelectedChancelor(chancelor)
          setIsChancelor(player.playerId === chancelor.playerId)
        })

        socket.on("player voted", (player: Player) => {
          setHasVotedPlayers((hasVotedPlayers) => [...hasVotedPlayers, player])
        })

        socket.on("victory", (winningSide:string) => {
          setIsGameStarted(false);
          setGameWon(winningSide);
        })

        socket.on("new turn", (president: Player) => {
          setTimeout(() => {
            setIsPresident(false);
            setIsChancelor(false);
            setSelectedChancelor(undefined);
            resetVotes();
            setHasVotedPlayers([]);
            startTurn(president);
          }, 5000)
        })
      }
    }
  }, []);

  return (
    <div className="GameBoard">
      {displayRules && <Rules />}
      <div className="howToPlay">
        <img src={bookIcon} alt="bookIcon" onClick={showRules} />
      </div>
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
          <LinkToShare player={player}></LinkToShare>
        </div>
      )}

      {otherPlayers && (
        <OtherPlayers
          selectedPresident={selectedPresident}
          selectedChancelor={selectedChancelor}
          players={otherPlayers}
          hasVotedPlayers={hasVotedPlayers}
        ></OtherPlayers>
      }
      
      { isGameStarted &&
        <SelectPlayerModal 
          socket={socket}
          setSelectedChancelor={setSelectedChancelor} 
          players={otherPlayers}
          isPresident={isPresident}
          setIsPresident={setIsPresident}
        ></SelectPlayerModal>
      }

      { mustVote && selectedPresident && selectedChancelor && 
        <VoteCardBlock socket={socket} hasVotedPlayers={hasVotedPlayers} player={player}></VoteCardBlock> 
      }

      { isGameStarted && <BoardComponent socket={socket}></BoardComponent> }
      <VoteResultModal socket={socket} setMustVote={setMustVote} isPresident={isPresident} setIsPresident={setIsPresident}></VoteResultModal>
      <PlayerRole socket={socket}></PlayerRole>
      { isGameStarted && <SelectCardModal isPresident={isPresident} isChancelor={isChancelor} socket={socket}></SelectCardModal> }
      <VictoryModal gameWon={gameWon}></VictoryModal>
      <RulesModal></RulesModal>
    </div>
  )
}

export default Board
