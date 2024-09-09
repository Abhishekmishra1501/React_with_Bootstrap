import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Pages/Nav'; // Import your Nav component
import Home from './Pages/Banner';
import Skills from './Pages/Skills';
import Progress from './Pages/Progress';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
