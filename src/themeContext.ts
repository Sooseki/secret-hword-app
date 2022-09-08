import React from "react";
import { Player } from "./types/types";

const player: Player = {
  host: localStorage.getItem("host")
    ? localStorage.getItem("host") === "true"
    : false,
  roomId: localStorage.getItem("roomId") ? localStorage.getItem("roomId") : "",
  playedCell: "",
  username: localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "",
  socketId: localStorage.getItem("socketId")
    ? localStorage.getItem("socketId")
    : "",
  turn: localStorage.getItem("turn")
    ? localStorage.getItem("turn") === "true"
    : false,
  win: false
};

const setPlayer: any = () => {};

export const UserContext = React.createContext({ player, setPlayer });
