import React, {useState, useEffect} from "react";
import Modal from "./Modal";
import useModal from "../../hooks/useModal";
import { Player } from "../../types/types";
import { Socket } from "socket.io-client";
import "./SelectPlayerModal.scss";

interface props {
    players: Array<Player>
    setSelectedChancelor: React.Dispatch<React.SetStateAction<Player | undefined>>
    setIsPresident: React.Dispatch<React.SetStateAction<boolean>>
    socket: Socket
    isPresident: boolean
}

const SelectPlayerModal = ({players, socket, setSelectedChancelor, isPresident, setIsPresident }:props) => {
    const { isModalShowing, setIsModalShowing } = useModal();  
    const [mustPresidentChose, setMustPresidentChose] = useState<boolean>(false);

    useEffect(() => {
        setIsModalShowing(mustPresidentChose)
    }, [mustPresidentChose, setMustPresidentChose]);

    useEffect(() => {
        if (isPresident) setMustPresidentChose(true)
    }, [isPresident, setIsPresident])

    return (
        <div className="select-player-modal">
            {mustPresidentChose &&
                <Modal 
                    setSelectedChancelor={setSelectedChancelor} 
                    setMustPresidentChose={setMustPresidentChose} 
                    socket={socket} players={players} 
                    isModalShowing={isModalShowing} 
                    />
                }
        </div>
    )
}
    

export default SelectPlayerModal;