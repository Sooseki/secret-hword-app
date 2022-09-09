import React from 'react';
import './VoteCard.scss';

interface props {
  isYesCard?: boolean
  setVote: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const VoteCard = ({isYesCard, setVote} : props) => {
  const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setVote(isYesCard);
    e.currentTarget.closest('.VoteCard')?.classList.add('ChosenVoteCard');
  }
  return (
    <div className="VoteCard" onClick={handleClick} >
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