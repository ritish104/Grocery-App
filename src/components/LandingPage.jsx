
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import product1 from "../assets/g1.jpg"
import product2 from "../assets/g2.jpg"
import product3 from "../assets/g3.jpg"
import product4 from "../assets/g4.jpg"
import product5 from "../assets/g5.jpg"
import product6 from "../assets/g6.jpg"




function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header>
        <h1>Diwali Grocery Offers</h1>
        <button onClick={() => navigate('/product/1')}>Explore Products</button>
      </header>
      <section className="offers">
        <h2>Top Offers</h2>
        <div className="offer-cards">
        
          <div className="card" onClick={() => navigate('/product/1')}>
            <img src={product1} alt="Offer" />
            <p>Offer 1</p>
          </div>
          <div className="card" onClick={() => navigate('/product/2')}>
            <img src={product2} alt="Offer" />
            <p>Offer 2</p>
          </div>
          <div className="card" onClick={() => navigate('/product/3')}>
            <img src={product3} alt="Offer" />
            <p>Offer 3</p>
          </div>
          <div className="card" onClick={() => navigate('/product/4')}>
            <img src={product4} alt="Offer" />
            <p>Offer 4</p>
          </div>
          <div className="card" onClick={() => navigate('/product/5')}>
            <img src={product5} alt="Offer" />
            <p>Offer 5</p>
          </div>
          <div className="card" onClick={() => navigate('/product/6')}>
            <img src={product6} alt="Offer" />
            <p>Offer 6</p>
          </div>
         
         
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
