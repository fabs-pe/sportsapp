import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import AllCountries from './pages/Countries';
import CountryFlag from './pages/Football';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<AllCountries />} />
          <Route path="/football" element={<CountryFlag />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App