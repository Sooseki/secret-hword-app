import React, {useEffect, useState} from 'react';
import VoteCard from '../VoteCard/VoteCard';
import './SelectCardModal.scss';
import Modal from "./Modal";
import { Player } from '../../types/types';

interface props {
  socket: any
  isPresident: boolean
  isChancelor: boolean
}

const SelectCardModal = ({socket, isPresident, isChancelor}:props) => {
  const [selectedCards, setSelectedCards] = useState<Array<string>>([]);
  const [drawnLawCards, setDrawnLawCards] = useState<Array<string>>();

  const selectLawCards = (selectedCard:string) => {
    setSelectedCards([...selectedCards, selectedCard]);
  }

  useEffect(() => {
    if (isPresident && selectedCards.length === 2) {
      socket.emit("president selected cards", selectedCards);
      setDrawnLawCards(selectedCards);
    }
    if (isChancelor && selectedCards.length === 1) {
      socket.emit("chancelor selected card", selectedCards[0]);
      setDrawnLawCards(selectedCards);
    }
  }, [selectedCards, setSelectedCards])
  
  useEffect(() => {
    socket.on("president cards", (cards: Array<string>) => {
      setDrawnLawCards(cards);
    })
    socket.on("chancelor cards", (cards: Array<string>) => {
      setDrawnLawCards(cards);
    })
    socket.on("new turn", (president: Player) => {
      setTimeout(() => {
        setDrawnLawCards([]);
        setSelectedCards([]);
      }, 5000)
    })
  }, [])

  return (
    <div className="SelectCardModal">
      {drawnLawCards && ((isPresident && drawnLawCards.length === 3) || (isChancelor && drawnLawCards.length === 2)) &&
        <Modal eventHandler={selectLawCards} cards={drawnLawCards}/>
      }
    </div>
  );
}

export default SelectCardModal;