import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./SelectPlayerModal.scss";
import Modal from "./Modal";
import useModal from "../../hooks/useModal";
import { Player } from "../../types/types";

interface props {
    players: Array<Player>
    isPresident: boolean
    setSelectedChancelor: React.Dispatch<React.SetStateAction<Player | undefined>>
    eventHandler: (selectedPlayer:Player) => void
}

const SelectPlayerModal = ({players, isPresident, eventHandler, setSelectedChancelor}:props) => {
    const [selectedPlayer, setSelectedPlayer] = useState<string>()
    const { isModalShowing, setIsModalShowing } = useModal();  
    useEffect(() => {
        setIsModalShowing(isPresident)
    }, [isPresident, setIsModalShowing]);

    useEffect(() => {
        players.map((player) => {
            if (player.playerId === selectedPlayer) {
                setSelectedChancelor(player);
                eventHandler(player);
            }
        })
    }, [players, selectedPlayer, setSelectedChancelor])
    return (
        <div className="select-player-modal">
            <Modal players={players} isModalShowing={isModalShowing} setSelectedPlayer={setSelectedPlayer}/>
        </div>
    )
}
    

export default SelectPlayerModal;