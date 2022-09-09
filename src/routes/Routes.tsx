import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from '../templates/Login/Login'
import Room from '../templates/Room/Room'
import Board from '../templates/Board/Board'
import { Homepage } from '../templates/homepage/Homepage'


const Router = () => {
  console.log('okok')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/game" element={<Board />} />
      </Routes>
    </BrowserRouter>

  )
}
export default Router