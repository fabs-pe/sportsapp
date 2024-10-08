import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import AllCountries from './pages/Countries';
import CountryFlag from './pages/Football';
import Stadiums from './components/venues';
import Teams from './components/TeamSearch';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<AllCountries />} />
          <Route path="/football" element={<CountryFlag />} />
          <Route path="/venues" element={<Stadiums />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </div>
  );
};

export default App