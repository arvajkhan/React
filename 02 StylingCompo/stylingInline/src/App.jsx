import { useState } from 'react'
import './App.css'
import Hello from './hello'
import Bye from './bye'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Hello/>
      <Bye/>
    </>
  )
}

export default App
