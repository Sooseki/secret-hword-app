import React from 'react';
import './Room.scss';
import Form from '../../components/Form/Form';
import { useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../themeContext';

function Room() {
  const {player} = useContext(UserContext);
  console.log("this is a nice thing omg", player)
  const [roomCreation, setRoomCreation] = useState({}); //check if usefull
  const navigate = useNavigate();
  const sendCreateRoom = (e: any) => {
    e.preventDefault()
    //console.log(roomCreation)
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