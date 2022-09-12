import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./SelectPlayerModal.scss";
import Modal from "./Modal";
import useModal from "../../hooks/useModal";
import { Player } from "../../types/types";

interface props {
    players: Array<Player>
    setSelectedChancelor: React.Dispatch<React.SetStateAction<Player | undefined>>
    setIsPresident: React.Dispatch<React.SetStateAction<boolean>>
    socket: any
    isPresident: boolean
}

const SelectPlayerModal = ({players, socket, setSelectedChancelor, isPresident, setIsPresident }:props) => {
    const [selectedPlayer, setSelectedPlayer] = useState<string>()
    const { isModalShowing, setIsModalShowing } = useModal();  
    const [mustPresidentChose, setMustPresidentChose] = useState<boolean>(false);

    const handleChancelor = (selectedPlayer:Player) => {
        setMustPresidentChose(false);
        socket.emit("selected chancelor", selectedPlayer)
    }

    useEffect(() => {
        setIsModalShowing(mustPresidentChose)
    }, [mustPresidentChose, setMustPresidentChose]);

    useEffect(() => {
        if (isPresident) setMustPresidentChose(true)
    }, [isPresident, setIsPresident])

    useEffect(() => {
        players.map((player) => {
            if (player.playerId === selectedPlayer) {
                setSelectedChancelor(player);
                handleChancelor(player);
            }
        })
    }, [players, selectedPlayer, setSelectedChancelor])
    return (
        <div className="select-player-modal">
            {mustPresidentChose &&
                <Modal players={players} isModalShowing={isModalShowing} setSelectedPlayer={setSelectedPlayer}/>
            }
        </div>
    )
}
    

export default SelectPlayerModal;