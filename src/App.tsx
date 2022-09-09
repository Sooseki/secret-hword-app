import React, { useState } from "react";
import "./App.css";
import Router from "./routes/Routes";
import { UserContext } from "./themeContext";

const uniqueId = Date.now();
const playerId = uniqueId.toString();

if (!localStorage.getItem("playerId")) {
  localStorage.setItem("playerId", playerId);
}

function App() {
  const [player, setPlayer] = useState({
    host: localStorage.getItem("host")
      ? localStorage.getItem("host") === "true"
      : false,
    roomId: localStorage.getItem("roomId")
      ? localStorage.getItem("roomId")
      : "",
    playedCell: "",
    username: localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "",
    socketId: localStorage.getItem("socketId")
      ? localStorage.getItem("socketId")
      : "",
    playerId: localStorage.getItem("playerId") ?? playerId,
    turn: localStorage.getItem("turn")
      ? localStorage.getItem("turn") === "true"
      : false,
    win: false
  });

  return (
    <div className="App">
      <UserContext.Provider value={{ player, setPlayer }}>
        <Router></Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
