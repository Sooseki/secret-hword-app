import React from 'react';
import './Room.scss';
import Form from '../../components/Form/Form';
import { useState } from 'react';

function Room() {
  const [roomNumber, setRoomNumber] = useState({});
  const [roomCreation, setRoomCreation] = useState({});

  const sendRoomNumber = (e: any) => {
    e.preventDefault()
    console.log("roomNumber ok")
  }
  const sendCreateRoom = (e: any) => {
    e.preventDefault()
    console.log("roomCreation ok")
  }
  const formRoomNumber = {
    inputs: [
      {      
        'name': 'room-number',
        'type': 'text',
        'placeholder': 'Enter your room number',
      },
    ],
    handleSubmit: sendRoomNumber
  }
  const formCreateRoom = {
    inputs: [
      {      
        'name': 'create-room',
        'type': 'button',
        'placeholder': 'Create a new room',
      },
    ],
    handleSubmit: sendCreateRoom
  }
  

  return (
    <div className="room">
      <Form form={formRoomNumber} setData={setRoomNumber} />
      <Form form={formCreateRoom} setData={setRoomCreation} />
    </div>
  );
}

export default Room;