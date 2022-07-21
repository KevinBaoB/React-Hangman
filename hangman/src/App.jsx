import { useState } from 'react'
import './App.css'

import WordDisplay from './components/WordDisplay.jsx'
import LetterHolder from './components/LetterHolder'
import UserInput from './components/UserInput'

function App() {


  return (
    <div className="App">
      <h1>Hangman</h1>
      <LetterHolder />
    </div>
  )
}

export default App
