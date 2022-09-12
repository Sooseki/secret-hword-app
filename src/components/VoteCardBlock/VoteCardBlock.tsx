import React, {useEffect, useState} from 'react';
import { Socket } from 'socket.io-client';
import { Player } from '../../types/types';
import VoteCard from '../VoteCard/VoteCard';
import './VoteCardBlock.scss';

interface props {
  socket: Socket
  hasVotedPlayers: Array<Player>
  player: Player
}

const VoteCardBlock = ({socket, hasVotedPlayers, player}:props) => {
  const [playerVote, setPlayerVote] = useState<boolean>();

  const handleVote = (vote:boolean) => {
    const hasVotedPlayersNumber = hasVotedPlayers.length + 1;
    socket.emit("player vote", {vote, player, hasVotedPlayersNumber});
  }

  useEffect(() => {
    console.log('this is document query selector : ', document.querySelector('.ChosenVoteCard'));
    if (playerVote === true || playerVote === false) handleVote(playerVote);
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