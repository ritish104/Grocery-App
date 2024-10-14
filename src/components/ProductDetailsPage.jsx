
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css';
import product1 from "../assets/g1.jpg"
import product2 from "../assets/g2.jpg"
import product3 from "../assets/g3.jpg"
import product4 from "../assets/g4.jpg"
import product5 from "../assets/g5.jpg"
import product6 from "../assets/g6.jpg"

const products = {
  1: { img: product1, name: 'Product 1', price: '$20.00', description: 'This is a great product for your Diwali celebrations.', discount: '10% Off' },
  2: { img: product2, name: 'Product 2', price: '$25.00', description: 'This product is perfect for Diwali.', discount: '15% Off' },
  3: { img: product3, name: 'Product 3', price: '$30.00', description: 'A must-have product for your festive needs.', discount: '20% Off' },
  4: { img: product4, name: 'Product 4', price: '$18.00', description: 'Celebrate Diwali with this amazing product.', discount: '5% Off' },
  5: { img: product5, name: 'Product 5', price: '$35.00', description: 'Great value for your Diwali shopping.', discount: '25% Off' },
  6: { img: product6, name: 'Product 6', price: '$22.00', description: 'Make your Diwali special with this product.', discount: '12% Off' },
 
};

function ProductDetailsPage() {
  const { id } = useParams();
  const product = products[id]; 

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.img} alt={`Product ${id}`} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Discount: {product.discount}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
