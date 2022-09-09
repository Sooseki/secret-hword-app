import React from 'react'
import './PlayerRole.scss'

interface props {
    role: string
}

function PlayerRole({role}: props) {
  return (
    <div className="PlayerRole">
        <div className={`PlayerRole__${role}`}>{role}</div>
    </div>
  );
}

export default PlayerRole;