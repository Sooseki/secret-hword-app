import React, { Component } from 'react';
import './PlayerIcon.scss';
import userImage from './user.png'

type PlayerIcon = {
  playerName : string,
}
const PlayerIcon = () => {
  return (
    <div className="playerComponent">
      <img src={userImage} alt='user-image'></img>
      <h1 className='playerName'>Juan</h1>
    </div>
  );
}

export default PlayerIcon;