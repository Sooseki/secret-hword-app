import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import FascBoard from '../FascBoard/FascBoard';
import LibBoard from '../LibBoard/LibBoard';
import './Board.scss';

interface props {
  socket: Socket
}

const Board = ({ socket }:props) => {
  const [countLibCards, setCountLibCards] = useState<number>(0);
  const [countFascCards, setCountFascCards] = useState<number>(0);
  
  useEffect(() => {
    socket.on("selected law card", (card: string) => {
      let libCards = countLibCards
      let fascCards = countFascCards
      if (card === "liberal") {
        libCards++
        setCountLibCards(libCards);
      } else {
        fascCards++
        setCountFascCards(fascCards);
      }
      socket.emit("check victory", libCards, fascCards);
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