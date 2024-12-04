import { useState } from 'react'
import './App.css'

function App() {
      let [counter, setcounter] = useState(0)
      //let [removeCounter, setremoveCounter] = useState(counter - 1)

    //let Counter = 1

    const addValue = () => {
    
     counter = counter + 1;
      setcounter(counter)
      // console.log("Value Added", counter);
      
    }

    const removeValue = () =>{
     // console.log("Value Removed", removeCounter);
      setcounter(counter-1)
    }

  return (
    <>
        <h1>Counter App</h1>
        <h2>Counter Value : {counter}</h2>

        <button onClick={addValue}>Add Value</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
