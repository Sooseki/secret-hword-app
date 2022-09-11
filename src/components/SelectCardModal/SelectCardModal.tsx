import React, {useEffect, useState} from 'react';
import VoteCard from '../VoteCard/VoteCard';
import './SelectCardModal.scss';
import Modal from "./Modal";

interface props {
  cards: Array<string>
  eventHandler: (selectedCard: string) => void
}

const SelectCardModal = ({cards, eventHandler}:props) => {
    
  return (
    <div className="SelectCardModal">
      <Modal eventHandler={eventHandler} cards={cards}/>
    </div>
  );
}

export default SelectCardModal;