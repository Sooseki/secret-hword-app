import React from 'react';
import FascBoard from '../FascBoard/FascBoard';
import LibBoard from '../LibBoard/LibBoard';
import './Board.scss';

interface props {
  countLibCards: number
  countFascCards: number
}

function Board({countLibCards,countFascCards}:props) {
  return (
    <div className="Board">
        <FascBoard countFascCards={countFascCards}></FascBoard>
        <LibBoard countLibCards={countLibCards}></LibBoard>
    </div>
  );
}

export default Board;