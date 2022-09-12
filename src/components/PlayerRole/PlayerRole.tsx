import React, { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client';
import './PlayerRole.scss'

interface props {
  socket: Socket
}

const PlayerRole = ({ socket }: props) => {
  const [role, setRole] = useState<string>();

  useEffect(() => {
    socket.on("player role", (newRole:string) => {
      setRole(newRole);
    })
  }, [])

  return (
    <div className="PlayerRole">
      {role &&
        <div className={`PlayerRole__${role}`}>{role}</div>
      }
    </div>
  );
}

export default PlayerRole;