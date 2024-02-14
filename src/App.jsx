import { useState, useEffect } from 'react'
import './App.css'
import BotCollections from './BotCollections'
import { BrowserRouter } from 'react-BrowserRouter-dom'


function App() {

  return (
    <BrowserRouter>
     <BotCollections />
    </BrowserRouter>
  )
}

export default App