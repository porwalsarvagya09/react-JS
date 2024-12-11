import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15) //(useState is commonly used react hook)
  
  
  const addValue = () => {
    if(counter <= 19){
      counter = counter + 1
      setCounter(counter)
    }
  }

  const removeValue = () => {
    setCounter(counter - 1)
    if(counter == 0){setCounter(counter)}
  }

  return (
    <>
      <h1>React with Sarvagya</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button><br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
       
    </>
  )
}

export default App
