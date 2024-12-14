import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)}

    const router = createBrowserRouter([
      {
        path: "/",
        element: <> <Navbar/> <Home/></>
      },{
        path: "/about",
        element: <> <Navbar/> <About/></>
      },
    ])


  return (
    <>
     <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
    
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
