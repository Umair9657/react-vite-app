import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'



function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*~"

    for (let i = 1; i <=length; i++){
      let char = Math.floor(Math.random() * str.length + 1) 

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, setPassword])
 
  const alert = <alert>Password Copied</alert>
  const copyPassword = useCallback(() => {
    passwordRef.current?.select(alert)
    window.navigator.clipboard.writeText(password)
  }, [password])

  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
 
  
  return (
    <>
     
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700'>
        <h1 className='w3-container w3-center w3-animate-top text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-1'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        >
            
      </input>
      <button onClick={copyPassword}
       className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => { setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
                defaultChecked = {numberAllowed}
                id='numberInput'
                onChange={() => {
                  setnumberAllowed((prev) => !prev)
                }}/>
                <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked= {charAllowed}
            id='charactersInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
             <label htmlFor='charactersInput'>Characters</label>
        </div>
      </div>
        
      </div>
      
      
    </>
  )
}

export default App
