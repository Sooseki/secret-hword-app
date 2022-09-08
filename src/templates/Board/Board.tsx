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

/*document.querySelector("#restart").addEventListener('click', function () {
  restartGame();
})*/

/*
function restartGame(players = null) {
  if (player.host && !players) {
      player.turn = true;
      socket.emit('play again', player.roomId);
  }

  const cells = document.getElementsByClassName('cell');

  for (const cell of cells) {
      cell.innerHTML = '';
      cell.classList.remove('win-cell', 'text-danger');
  }

  turnMsg.classList.remove('alert-warning', 'alert-danger');

  if (!player.host) {
      player.turn = false;
  }

  player.win = false;

  if (players) {
      startGame(players);
  }
}
*/
