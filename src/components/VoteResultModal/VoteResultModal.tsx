import React, {useEffect, useState} from 'react';
import './VoteResultModal.scss';
import Modal from "./Modal";
import { Socket } from 'socket.io-client';

interface props {
  socket: Socket
  setMustVote: React.Dispatch<React.SetStateAction<boolean>>
  isPresident: boolean
  setIsPresident: React.Dispatch<React.SetStateAction<boolean>>
}

const VoteResultModal = ({socket, setMustVote, isPresident, setIsPresident}:props) => {
  const [hasVotePassed, setHasVotePassed] = useState<boolean>();

  useEffect(() => {
    socket.off("votes results");
    socket.on("votes results", (votePassed: boolean) => {
      setMustVote(false);
      setHasVotePassed(votePassed);
      setTimeout(() => {
        if (isPresident && votePassed) { 
          socket.emit("get cards");
        }
        setHasVotePassed(undefined)
      }, 5000);
    })
  }, [isPresident, setIsPresident]);

  return (
    <div className="VoteResultModal">
      {(hasVotePassed === false || hasVotePassed === true) &&
        <Modal result={hasVotePassed}/>
      }
    </div>
  );
}

export default VoteResultModal;