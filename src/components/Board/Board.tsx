import React from 'react';
import FascBoard from '../FascBoard/FascBoard';
import LibBoard from '../LibBoard/LibBoard';
import './Board.scss';

function Board() {
  return (
    <div className="Board">
        <FascBoard></FascBoard>
        <LibBoard></LibBoard>
    </div>
  );
}

export default Board;