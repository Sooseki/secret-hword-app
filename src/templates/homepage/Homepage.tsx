import React, { useState } from "react"
import { Link } from "react-router-dom"
import Form from "../../components/Form/Form"
import "./Homepage.scss"

import { SvgCards } from "../../assets/svg_tsx/SvgCards"

import Title from "../../assets/imgs/banner.png"

import bookIcon from "../../assets/svg/book.svg"
import LiberalIcon from "../../assets/svg/liberalIcon.svg"

export const Homepage = () => {
  const [data, setData] = useState({})
  const [loginAvailable, setLoginAvailable] = useState(false)

  const LoginRendder = () => {
    console.log(loginAvailable)
    setLoginAvailable(!loginAvailable)
  }

  const showRules = () => {
    console.log(loginAvailable)
    
  }

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
      <div className="howToPlay">
        <img src={bookIcon} alt="bookIcon" onClick={showRules}/>
      </div>
      <div className="headerContainer">
        <div className="svgContainer">
          <SvgCards size={["25%", "25%"]} />
        </div>

        <img src={Title}></img>

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
