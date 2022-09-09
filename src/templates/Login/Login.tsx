import React, { useState } from "react"
import Form from "../../components/Form/Form"
import "./Login.scss"

import { SvgCards } from "../../assets/svg_tsx/SvgCards"

import Title from "../../assets/imgs/banner.png"

import FacistIcon from "../../assets/svg/facistIcon.svg"
import LiberalIcon from "../../assets/svg/liberalIcon.svg"

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
      <div className="headerContainer">
        <div className="svgContainer">
          <SvgCards size={["25%", "25%"]} />
        </div>
        <img src={Title}></img>
        <div className="titleContainer">
          <h1>SECRET HITLER</h1>
        </div>
        <div className="littleSvgContainer">
          <div className="liberalIcon">
            <img src={LiberalIcon}></img>
          </div>
          <div className="facistIcon">
            <img src={FacistIcon}></img>
          </div>
        </div>
        <div className="playContainer">
          <h2>PLAY</h2>
        </div>
      </div>
    </div>
  )
}

export default Login
