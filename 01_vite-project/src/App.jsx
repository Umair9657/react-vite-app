import App1 from "./index"

function myCount(){
  console.log("Hello world this is react js project ")
}


function App() {

  return (
    <>
      <App1/>
      <h2>Hello Umair Bhai</h2>
      <button onClick={myCount}> Click me</button>
    </>
  )
}

export default App
