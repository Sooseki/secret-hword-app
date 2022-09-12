import React, { useEffect, useState } from 'react';
import FascBoard from '../FascBoard/FascBoard';
import LibBoard from '../LibBoard/LibBoard';
import './Board.scss';

interface props {
  socket: any
}

const Board = ({ socket }:props) => {
  const [countLibCards, setCountLibCards] = useState<number>(0);
  const [countFascCards, setCountFascCards] = useState<number>(0);
  
  useEffect(() => {
    socket.on("selected law card", (card: string) => {
      if (card === "liberal") {
        setCountLibCards(countLibCards + 1);
      } else {
        setCountFascCards(countFascCards + 1);
      }
      socket.emit("check victory", countLibCards, countFascCards);
    })
  }, [countLibCards, setCountLibCards, countFascCards, setCountFascCards])

  return (
    <div className="Board">
        <FascBoard countFascCards={countFascCards}></FascBoard>
        <LibBoard countLibCards={countLibCards}></LibBoard>
    </div>
  );
}

export default Board;