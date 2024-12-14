// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';




function Home() {
  const navigate = useNavigate();
  
    return (
      <>
       <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to Flex Gym</h1>
          <p className="text-xl mb-8">Your journey to fitness starts here</p>
          <button
            onClick={() => navigate('/register')}
          className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600">
            Get Started
          </button>
        </div>
      </div>
      </>
    );
  }
  
  export default Home;
  
