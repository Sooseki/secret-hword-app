import React from 'react'
import './PlayerRole.scss'
import { User } from '../../types/types'

interface props {
    user: User
}

function PlayerRole({user}: props) {
  return (
    <div className="PlayerRole">
        <div className={`PlayerRole__${user.role}`}>{user.role}</div>
    </div>
  );
}

export default PlayerRole;