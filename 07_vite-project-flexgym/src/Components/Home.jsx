// src/components/Home.jsx
function Home() {
    return (
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/gym-background.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to Flex Gym</h1>
          <p className="text-xl mb-8">Your journey to fitness starts here</p>
          <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600">
            Get Started
          </button>
        </div>
      </div>
    );
  }
  
  export default Home;
  
