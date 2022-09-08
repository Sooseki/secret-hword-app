import React, { useState } from "react"
import Form from "../../components/Form/Form"
import "./Login.scss"

import { SvgCards } from "../../assets/SvgCards"
import Title from "../../assets/imgs/banner.png"
import PlayButton from "../../assets/imgs/testPlay.png"

export const Login = () => {
  const [data, setData] = useState({})

  const sendUsername = (e: any) => {
    e.preventDefault()
    console.log("good good")
  }

  const form = {
    inputs: [
      {
        name: "pseudo",
        type: "text",
        placeholder: "Enter your 39 - 45 name",
      },
    ],
    handleSubmit: sendUsername,
  }

  return (
    <div className="loginPage">
      <div className="bannerContainer">
        <div className="svgContainer">
          <SvgCards size={["25%", "25%"]} />
        </div>
        <div className="titleContainer">
          <h1>SECRET HITLER</h1>
        </div>
        <img src={Title} />
        <div className="playContainer">
          {" "}
          <h2>PLAY</h2>
        </div>
      </div>
    </div>
  )
}

export default Login
