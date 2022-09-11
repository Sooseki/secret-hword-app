import React, {useEffect, useState} from 'react';
import VoteCard from '../VoteCard/VoteCard';
import './VictoryModal.scss';
import Modal from "./Modal";

interface props {
    gameWon: string
}

const VictoryModal = ({gameWon}:props) => {
    
  return (
    <div className="VictoryModal">
      <Modal gameWon={gameWon}/>
    </div>
  );
}

export default VictoryModal;