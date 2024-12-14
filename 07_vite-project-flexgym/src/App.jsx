// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Register from './Components/Register';

function App() {
  return (
    <Router>
      <img src= "C:\Users\ansar\Desktop\fitness Banner Landscape new.jpg" className="w-full h-[150px] object-cover"></img>

      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

