import { emit } from 'process';
import React from 'react';
import './App.css';
import Router from "./routes/Routes"
import { io } from 'socket.io-client';
const socket = io("http://localhost:5555");
function App() {

  const sendPseudo = () => {
  //  socket.emit()
  }
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;