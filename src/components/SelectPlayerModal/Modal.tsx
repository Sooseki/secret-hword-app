import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Socket } from "socket.io-client";
import { Player } from "../../types/types";
import PlayerIcon from "../PlayerIcon/PlayerIcon";

interface props {
    players: Array<Player>
    isModalShowing: boolean
    isToggled: boolean
    socket: Socket
    setMustPresidentChose: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedChancelor: React.Dispatch<React.SetStateAction<Player | undefined>>
}
const container = document.getElementById('root')!;

const PlayerModal:any = ({ setSelectedChancelor, setMustPresidentChose, socket, isModalShowing, players }: props) => {
    const [selectedPlayer, setSelectedPlayer] = useState<string>()
    
    const handleChancelor = (selectedPlayer:Player) => {
        setMustPresidentChose(false);
        socket.emit("selected chancelor", selectedPlayer)
    }

    const handleSelectPlayer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setSelectedPlayer(e.currentTarget.closest(".handle-select-player")?.id);
        console.log(e.currentTarget.closest(".handle-select-player")?.id)
    
        players.map((player) => {
            if (player.playerId === e.currentTarget.closest(".handle-select-player")?.id) {
                setSelectedChancelor(player);
                handleChancelor(player);
            }
        })
    }
    return (
        isModalShowing ? ReactDOM.createPortal(
            <>
                <div className="modal">
                    <div className="modal-content">
                    <h2 className="modal-title">Elect a Chancelor !</h2>
                    <div className="select-player-container">
                        {players.map((player) => {
                            return(
                                <div id={player.playerId} onClick={handleSelectPlayer} className="handle-select-player">
                                    <PlayerIcon player={player}></PlayerIcon>
                                </div>
                                )
                        })} 
                    </div>
                    </div>
                </div>
            </>, container
        ) : null
    )
}

export default PlayerModal;