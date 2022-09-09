import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { Player } from "../../types/types";
import PlayerIcon from "../PlayerIcon/PlayerIcon";

interface props {
    players: Array<Player>
    isModalShowing: boolean
    isToggled: boolean
    setSelectedPlayer: any
}
const container = document.getElementById('root')!;

const PlayerModal:any = ({ isModalShowing, players, setSelectedPlayer }: props) => {
    const handleSelectPlayer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setSelectedPlayer(e.currentTarget.closest(".handle-select-player")?.id);
    }
    return (
        isModalShowing ? ReactDOM.createPortal(
            <>
                <div className="modal">
                    <div className="modal-content">
                       {players.map((player) => {
                            return(
                                <div id={player.playerId} onClick={handleSelectPlayer} className="handle-select-player">
                                    <PlayerIcon player={player}></PlayerIcon>
                                </div>
                                )
                       })} 
                    </div>
                </div>
            </>, container
        ) : null
    )
}

export default PlayerModal;