import React from 'react';
import './Room.scss';
import Form from '../../components/Form/Form';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Room() {
  const [roomCreation, setRoomCreation] = useState({}); 
  const navigate = useNavigate();

  const sendCreateRoom = (e: any) => {
    e.preventDefault()
    localStorage.setItem("isRoomCreated", 'true')
    navigate('/game', {replace: true})
  };
  
  const formCreateRoom = {
    inputs: [
      {   
        'name': 'create-room',
        'type': 'submit',
        'placeholder': 'Create a new room',   
        'value': 'Create a new room'
      },
    ],
    handleSubmit: sendCreateRoom
  }
  

  return (
    <div className="room">
      <Form form={formCreateRoom} setData={setRoomCreation} />
    </div>
  );
}

export default Room;