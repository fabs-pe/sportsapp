import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Football from './pages/Football';
import Sports from './components/sports';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/football" element={<Football />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App