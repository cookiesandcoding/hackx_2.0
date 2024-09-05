import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import LearnMore from './pages/LearnMore';

import Products from './pages/Products';
import Services from './pages/Services';
import FindHospital from './pages/FindDoctor';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnMore" element={<LearnMore />} />
        
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element ={<team />} />
        <Route path="/findhosp" element ={<FindHospital />} />
      </Routes> 
    </Router>
  );
};

export default App;

