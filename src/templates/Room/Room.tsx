import React from "react"
import "./Room.scss"
import Form from "../../components/Form/Form"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../themeContext"
import { SvgCards } from "../../assets/svg_tsx/SvgCards"
import { Rules } from "../../components/Rules"
import bookIcon from "../../assets/svg/book.svg"
import Title from "../../assets/imgs/banner.png"

function Room() {
  const { player } = useContext(UserContext)
  console.log("this is a nice thing omg", player)
  const [roomCreation, setRoomCreation] = useState({}) //check if usefull
  const navigate = useNavigate()
  const [displayRules, setDisplayRules] = useState<boolean>(false)

  const showRules = () => {
    setDisplayRules(!displayRules)
  }
  const sendCreateRoom = (e: any) => {
    e.preventDefault()
    //console.log(roomCreation)
    localStorage.setItem("isRoomCreated", "true")
    navigate("/game", { replace: true })
  }

  const formCreateRoom = {
    inputs: [
      {
        name: "create-room",
        type: "submit",
        placeholder: "Create a new room",
        value: "Create a new room",
      },
    ],
    handleSubmit: sendCreateRoom,
  }

  return (
    <div className="room">
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
          <Form form={formCreateRoom} setData={setRoomCreation} />
        </div>
      </div>
    </div>
  )
}

export default Room
