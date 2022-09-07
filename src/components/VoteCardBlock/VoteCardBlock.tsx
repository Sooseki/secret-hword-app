import React from 'react';
import VoteCard from '../VoteCard/VoteCard';
import './VoteCardBlock.scss';

function VoteCardBlock() {
  return (
    <div className="VoteCardBlock">
        <VoteCard isYesCard={true}></VoteCard>
        <VoteCard></VoteCard>
    </div>
  );
}

export default VoteCardBlock;