
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import ProductDetailsPage from './components/ProductDetailsPage';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    
  );
}

export default App;
