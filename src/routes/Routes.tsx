import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from '../templates/Login/Login'
import Room from '../templates/Room/Room'
import Board from '../templates/Board/Board'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/rooms" element={<Room />} />
      <Route path="/game" element={<Board />} />
    </Routes>

  )
}
export default Router