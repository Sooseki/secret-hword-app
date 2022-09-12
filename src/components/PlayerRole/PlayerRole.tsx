import React, { useEffect, useState } from 'react'
import './PlayerRole.scss'

interface props {
  socket: any
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