import { useState } from 'react'
import AppRouter from './config/router'
import './App.css';
import { socket } from './Utils/helpers.js';
export default function App() {
  socket.on("connect", () => {
    console.log(socket.id);
  })
  return (
    <AppRouter/>
  )
}

