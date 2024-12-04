import React from 'react'

function Card(props) {     // where we use username as a props
    console.log(props.username, props.title);   
    
  return (
    <>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black m-5">
    <img
      src="https://cdn.pixabay.com/photo/2022/01/20/15/34/monkey-6952630_960_720.jpg"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">{props.username}
      </span>
      <h2 className="text-xl font-semibold tracking-wide">{props.title}</h2>
    </div>
    <p className="text-gray-300">
      Monkey is one the best animal that are having suppper jump technique.
    </p>
  </div>
  </>
  )
}

export default Card
