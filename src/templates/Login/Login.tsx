import React, { useState, useContext } from "react"
import Form from "../../components/Form/Form"
import "./Login.scss"
import { User } from "../../types/types"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../themeContext"
import Title from "../../assets/imgs/banner.png"
import { SvgCards } from "../../assets/svg_tsx/SvgCards"
import {Rules} from "../../components/Rules/index"
import bookIcon from "../../assets/svg/book.svg"

function Login() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const roomId = urlParams.get("room")
  const { player, setPlayer } = useContext(UserContext)
  const [data, setData] = useState<User>({ username: "", role: "" })
  const navigate = useNavigate()
  const [loginAvailable, setLoginAvailable] = useState(false)
  const [displayRules, setDisplayRules] = useState(false)

  const LoginRendder = () => {
    console.log(loginAvailable)
    setLoginAvailable(!loginAvailable)
  }
  const showRules = () => {
    setDisplayRules(!displayRules)
  }

  const sendUsername = (e: any) => {
    e.preventDefault()
    setPlayer({ ...player, username: data.username })
    localStorage.setItem("username", data.username)
    if (roomId) {
      localStorage.setItem("isRoomCreated", "true")
      navigate("/game?room=" + roomId, { replace: true })
    } else {
      navigate("/game", { replace: true })
    }
  }

  const form = {
    inputs: [
      {
        name: "username",
        type: "text",
        placeholder: "Enter your 39 - 45 name",
      },
    ],
    handleSubmit: sendUsername,
  }

  return (
    <div className="loginPage">
      {displayRules && <Rules />}
      <div className="howToPlay">
        <img src={bookIcon} alt="bookIcon" onClick={showRules} />
      </div>
      <div className="headerContainer">
        <div className="svgContainer">
          <SvgCards size={["25%", "25%"]} />
        </div>
        <div className="secretWrapperOf">
          <img src={Title}></img>
        </div>

        <div className="titleContainer">
          <h1>SECRET HITLER</h1>
        </div>
        <div className="playContainer">
          {loginAvailable ? (
            <Form form={form} setData={setData} />
          ) : (
            <h2 onClick={LoginRendder}>PLAY</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
