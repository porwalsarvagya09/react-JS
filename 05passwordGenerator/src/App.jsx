import { useEffect } from 'react';
import { useCallback, useState, useRef } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    
    if (charAllowed) {
      str += "`~!#$%^&*()_{}-=+"
    }

    for (let index = 1; index <= length; index++){
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    
      <div className='px-4 py-3 mx-auto my-8 w-full max-w-md text-orange-600 bg-gray-800 
      rounded-lg shadow-md'>
       
       <h1 className='text-center text-white my-3'>Password Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       
      <input 
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="Password"
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className='bg-blue-700 text-white 
      outline-none px-3 py-0.5'>copy</button> 
      
      </div>
      
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          <input 
          type="range"
          min={6}
          max={100} 
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>

          <input type="checkbox"
          defaultChecked={numberAllowed}
          id = "numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} />
          <label htmlFor="numberInput">numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {charAllowed}
          id = "characterInput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
          />

          <label htmlFor="characterInput">Characters</label>


        </div>
      </div>

      </div>
    
  )
}

export default App
