import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import AllCountries from './pages/Countries';
import CountryFlag from './pages/Football';
import Stadiums from './components/venues';
import Teams from './components/TeamSearch';
import Footer from './components/Footer';
import Leagues from './pages/Leagues';
import OneLeague from './components/OneLeague';


const App = () => {
  return (
    <div>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/countries" element={<AllCountries />} />
          <Route path="/football" element={<CountryFlag />} />
          <Route path="/venues" element={<Stadiums />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/oneLeague/:strLeague" element={<OneLeague />} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </div>
  );
};

export default App