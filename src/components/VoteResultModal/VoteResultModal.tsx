import React, {useEffect, useState} from 'react';
import VoteCard from '../VoteCard/VoteCard';
import './VoteResultModal.scss';
import Modal from "./Modal";

interface props {
  result: boolean
}

const VoteResultModal = ({result}:props) => {
    
  return (
    <div className="VoteResultModal">
      <Modal result={result}/>
    </div>
  );
}

export default VoteResultModal;