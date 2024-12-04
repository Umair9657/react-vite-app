import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Test Started!!!</h1>
      <Card username ="Moneky : Asad"  title ="Asad is a Good Monkey"/>
      <Card username = "Monkey : Umair" title ="Umair  is also a Good Monkey "/>
     </>
  )}

export default App
