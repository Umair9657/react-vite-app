// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Layout from './Components/Layout';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path='/Footer/: Footer' element={<Footer />}/>
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;

