import React, { useState, useContext } from "react";
import Form from "../../components/Form/Form";
import "./Login.scss";
import { User } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../themeContext";

function Login() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const roomId = urlParams.get("room");
  const { player, setPlayer } = useContext(UserContext);
  const [data, setData] = useState<User>({ username: "" });
  const navigate = useNavigate();

  const sendUsername = (e: any) => {
    e.preventDefault();
    setPlayer({ ...player, username: data.username });
    localStorage.setItem("username", data.username);
    if (roomId) {
      localStorage.setItem("isRoomCreated", 'true')
      navigate("/game?room=" + roomId, { replace: true });
    } else {
      navigate("/game", { replace: true });
    }
  };

  const form = {
    inputs: [
      {
        name: "username",
        type: "text",
        placeholder: "Enter your 39 - 45 name"
      }
    ],
    handleSubmit: sendUsername
  };

  return (
    <div className="Login">
      <Form form={form} setData={setData} />
    </div>
  );
}

export default Login;
