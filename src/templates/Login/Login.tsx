import React, { useState } from "react"
import Form from "../../components/Form/Form"
import "./Login.scss"

import { SvgCards } from "../../assets/SvgCards"
import Title from "../../assets/imgs/title.png"

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
        <div>
          <SvgCards size={["30%", "30%"]} />
        </div>
        <img src={Title} />
      </div>
    </div>
  )
}

export default Login
