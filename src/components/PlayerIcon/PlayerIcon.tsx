import React, { Component } from 'react';
import './PlayerIcon.scss';

type PlayerIcon = {
  playerName : string,
}

const PlayerIcon = ({playerName}: PlayerIcon) => {
  return (
    <div className="playerComponent">
      <img src='../../../public/user.png' alt='user-image'></img>
      <h1 className='playerName'>{playerName}</h1>
    </div>
  );
}

export default PlayerIcon;