import React from 'react'
import {default as BoardComponent} from '../../components/Board/Board';
import PlayerRole from '../../components/PlayerRole/PlayerRole';
import VoteCardBlock from '../../components/VoteCardBlock/VoteCardBlock';
import './Board.scss';

function Board() {

  const user = {
    id: 2,
    username: 'Manon',
    role: 'Liberal'
  }
  
  return (
    <div className="GameBoard">
      <PlayerRole user={user}></PlayerRole>
      <VoteCardBlock></VoteCardBlock>
      <BoardComponent></BoardComponent>
    </div>
  );
}

export default Board;