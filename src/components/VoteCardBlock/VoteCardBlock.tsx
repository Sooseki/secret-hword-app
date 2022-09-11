import React, {useEffect, useState} from 'react';
import VoteCard from '../VoteCard/VoteCard';
import './VoteCardBlock.scss';

interface props {
  eventHandler: (vote:boolean) => void;
}

const VoteCardBlock = ({eventHandler}:props) => {
  const [playerVote, setPlayerVote] = useState<boolean>();

  useEffect(() => {
    console.log('this is document query selector : ', document.querySelector('.ChosenVoteCard'));
    if (playerVote === true || playerVote === false) eventHandler(playerVote);
    if (document.querySelector('.ChosenVoteCard')) document.querySelector('.VoteCard:not(.ChosenVoteCard)')?.classList.add('hideCard');
    setPlayerVote(undefined);
  }, [playerVote, setPlayerVote])
  return (
    <div className="VoteCardBlock">
        <VoteCard setVote={setPlayerVote} isYesCard={true}></VoteCard>
        <VoteCard setVote={setPlayerVote} isYesCard={false}></VoteCard>
    </div>
  );
}

export default VoteCardBlock;