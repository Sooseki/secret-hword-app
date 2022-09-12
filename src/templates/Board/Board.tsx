import { useEffect, useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { default as BoardComponent } from "../../components/Board/Board"
import PlayerIcon from "../../components/PlayerIcon/PlayerIcon"
import PlayerRole from "../../components/PlayerRole/PlayerRole"
import VoteCardBlock from "../../components/VoteCardBlock/VoteCardBlock"
import { UserContext } from "../../themeContext"
import { io } from "socket.io-client"
import { Player } from "../../types/types"
import "./Board.scss"
import OtherPlayers from "../../components/OtherPlayers/OtherPlayers"
import SelectPlayerModal from "../../components/SelectPlayerModal/SelectPlayerModal"
import VoteResultModal from "../../components/VoteResultModal/VoteResultModal"
import SelectCardModal from "../../components/SelectCardModal/SelectCardModal"
import VictoryModal from "../../components/VictoryModal/VictoryModal"

import { SvgCards } from "../../assets/svg_tsx/SvgCards"
import { Rules } from "../../components/Rules"
import bookIcon from "../../assets/svg/book.svg"
import Title from "../../assets/imgs/banner.png"

const socket = io("http://localhost:5555")

function Board() {
  const navigate = useNavigate()
  const { player, setPlayer } = useContext(UserContext)
  let tempPlayer = player
  const [role, setRole] = useState<string>()
  const [otherPlayers, setOtherPlayers] = useState<Array<Player>>([])
  let tempOtherPlayers = otherPlayers
  const [isPresident, setIsPresident] = useState<boolean>(false)
  const [isChancelor, setIsChancelor] = useState<boolean>(false)
  const [mustPresidentChose, setMustPresidentChose] = useState<boolean>(false)
  const [selectedChancelor, setSelectedChancelor] = useState<Player>()
  const [selectedPresident, setSelectedPresident] = useState<Player>()
  const [hasVotedPlayers, setHasVotedPlayers] = useState<Array<Player>>([])
  const [hasVotePassed, setHasVotePassed] = useState<boolean>()
  const [drawnLawCards, setDrawnLawCards] = useState<Array<string>>()
  const [countLibCards, setCountLibCards] = useState<number>(0)
  const [countFascCards, setCountFascCards] = useState<number>(0)
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [selectedCards, setSelectedCards] = useState<Array<string>>([])
  const [mustVote, setMustVote] = useState<boolean>(false)
  const [gameWon, setGameWon] = useState<string>()
  const [displayRules, setDisplayRules] = useState<boolean>(false)
  
  useEffect(() => {
    if (isPresident && selectedCards.length === 2) {
      console.log("entered if")
      socket.emit("president selected cards", selectedCards)
      setDrawnLawCards(selectedCards)
    }
    if (isChancelor && selectedCards.length === 1) {
      socket.emit("chancelor selected card", selectedCards[0])
      setDrawnLawCards(selectedCards)
    }
  }, [selectedCards, setSelectedCards])

  const showRules = () => {
    setDisplayRules(!displayRules)
  }
  
  const selectLawCards = (selectedCard: string) => {
    setSelectedCards([...selectedCards, selectedCard])
    console.log("selected caards: ", selectedCards.length)
  }

  const handleChancelor = (selectedPlayer: Player) => {
    setMustPresidentChose(false)
    socket.emit("selected chancelor", selectedPlayer)
  }
  const handleVote = (vote: boolean) => {
    const hasVotedPlayersNumber = hasVotedPlayers.length + 1
    socket.emit("player vote", { vote, player, hasVotedPlayersNumber })
  }
  const startTurn = (president: Player) => {
    console.log("-----------------------------", player.socketId)
    setMustVote(true)
    console.log("this is new president : ", president)
    setSelectedPresident(president)
    if (president.playerId === player.playerId) {
      setIsPresident(true)
      setMustPresidentChose(true)
    }
  }

  const resetVotes = () => {
    tempPlayer = { ...player, vote: undefined }
    setPlayer(tempPlayer)
    setHasVotedPlayers([])
  }

  useEffect(() => {
    socket.off("votes results")
    socket.on("votes results", (votePassed: boolean) => {
      setMustVote(false)
      setHasVotePassed(votePassed)
      console.log("new turn president votes result: ", isPresident)
      setTimeout(() => {
        console.log("new turn president votes result in timeout: ", isPresident)
        setHasVotePassed(undefined)
        if (isPresident && votePassed) {
          console.log("dont want it twice")
          socket.emit("get cards")
        }
      }, 5000)
      console.log("vote results : ", votePassed)
    })
  }, [isPresident, setIsPresident])

  useEffect(() => {
    socket.on("selected law card", (card: string) => {
      if (card === "liberal") {
        setCountLibCards(countLibCards + 1)
      } else {
        setCountFascCards(countFascCards + 1)
      }
      socket.emit("check victory", countLibCards, countFascCards)
    })
  }, [countLibCards, setCountLibCards, countFascCards, setCountFascCards])
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
          if (incommingPlayer.playerId === player.playerId) {
            return
          }
          let alreadyLoggedIn = false
          otherPlayers.map((otherPlayer) => {
            if (otherPlayer.playerId == incommingPlayer.playerId) {
              alreadyLoggedIn = true
            }
          })
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

        socket.on("start game", (president) => {
          setIsGameStarted(true)
          startTurn(president)
        })

        socket.on("play", (ennemyPlayer) => {
          //insert secret-hitler logic here
        })

        socket.on("player role", (newRole: string) => {
          setRole(newRole)
        })

        socket.on("selected chancelor", (chancelor: Player) => {
          setSelectedChancelor(chancelor)
          setIsChancelor(player.playerId === chancelor.playerId)
        })

        socket.on("player voted", (player: Player) => {
          setHasVotedPlayers((hasVotedPlayers) => [...hasVotedPlayers, player])
        })

        socket.on("players votes", (players: Player[]) => {
          players.map((p) => {
            tempOtherPlayers.map((otherplayer, index) => {
              if (p.playerId === otherplayer.playerId) {
                tempOtherPlayers[index].vote = p.vote
                // setOtherPlayers(tempOtherPlayers);
                console.log("this is tempOtherPlayers", tempOtherPlayers)
              }
            })
          })
        })
        socket.on("president cards", (cards: Array<string>) => {
          setDrawnLawCards(cards)
        })
        socket.on("chancelor cards", (cards: Array<string>) => {
          setDrawnLawCards(cards)
        })
        socket.on("victory", (winningSide: string) => {
          setIsGameStarted(false)
          setGameWon(winningSide)
        })
        socket.on("new turn", (president: Player) => {
          console.log("new turn president : ", isPresident)
          setTimeout(() => {
            setIsPresident(false)
            console.log("new turn president in timeout : ", isPresident)
            setIsChancelor(false)
            setSelectedChancelor(undefined)
            resetVotes()
            setHasVotedPlayers([])
            setDrawnLawCards([])
            setHasVotePassed(undefined)
            setSelectedCards([])
            startTurn(president)
          }, 5000)
        })
      }
    }
  }, [])
  return (
    <div className="GameBoard">
      {displayRules && <Rules />}
      <div className="howToPlay">
        <img src={bookIcon} alt="bookIcon" onClick={showRules} />
      </div>
      {isGameStarted && (
        <BoardComponent
          countLibCards={countLibCards}
          countFascCards={countFascCards}
        ></BoardComponent>
      )}
      {mustVote && selectedPresident && selectedChancelor && (
        <VoteCardBlock eventHandler={handleVote}></VoteCardBlock>
      )}

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
              pathname: "/?room=" + player.roomId,
            }}
          >
            http://localhost:3001/?room={player.roomId}
          </Link>
        </div>
      )}

      {otherPlayers && (
        <OtherPlayers
          selectedPresident={selectedPresident}
          selectedChancelor={selectedChancelor}
          players={otherPlayers}
          hasVotedPlayers={hasVotedPlayers}
        ></OtherPlayers>
      )}
      {mustPresidentChose && (
        <SelectPlayerModal
          eventHandler={handleChancelor}
          setSelectedChancelor={setSelectedChancelor}
          isPresident={mustPresidentChose}
          players={otherPlayers}
        ></SelectPlayerModal>
      )}
      {(hasVotePassed === false || hasVotePassed === true) && (
        <VoteResultModal result={hasVotePassed}></VoteResultModal>
      )}
      {drawnLawCards &&
        ((isPresident && drawnLawCards.length === 3) ||
          (isChancelor && drawnLawCards.length === 2)) && (
          <SelectCardModal
            eventHandler={selectLawCards}
            cards={drawnLawCards}
          ></SelectCardModal>
        )}
      {gameWon && <VictoryModal gameWon={gameWon}></VictoryModal>}
    </div>
  )
}

export default Board

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
