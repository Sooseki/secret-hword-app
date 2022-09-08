import React from 'react';
import './VoteCard.scss';

interface props {
  isYesCard?: boolean
}

function VoteCard({isYesCard} : props) {
  return (
    <div className="VoteCard">
      { isYesCard ?
        <div className="VoteCard__yes">
          <span className="VoteCard__text">Ja !</span>
        </div>
      : 
        <div className="VoteCard__no">
          <span className="VoteCard__text">Nein</span>
        </div>
      }
    </div>
  );
}

export default VoteCard;