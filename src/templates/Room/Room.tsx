import React, { FormEvent } from 'react';
import './Room.scss';
import Form from '../../components/Form/Form';
import { useState } from 'react';
import Axios from 'axios'

function Room() {
  const [roomNumber, setRoomNumber] = useState({});
  const [roomCreation, setRoomCreation] = useState({});

  const sendRoomNumber = (e: any) => {
    e.preventDefault()
    console.log("roomNumber ok")
    Axios.post(`url`, {
      roomNumber: roomNumber,
      roomCreation: roomCreation
    })
    .then((response) => {
      console.log('data sent', response);
    })
    .catch((error) => {
      console.log('Error encountered', error)
    });
  }
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
        'type': 'submit',
        'placeholder': 'Create a new room',   
        'value': 'Create a new room'
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