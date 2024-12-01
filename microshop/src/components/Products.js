// src/components/Products.js
import React, { useEffect } from 'react';
import './Products.css'; // Importing the new CSS file

const products = [
    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/products.webp', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/products.webp', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/products.webp', price: '$199.99' },
    
    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/products.webp', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/products.webp', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/products.webp', price: '$199.99' },

    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/shirts.jpg', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/shirts.jpg', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/shirts.jpg', price: '$199.99' },

    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/shirts.jpg', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/shirts.jpg', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/shirts.jpg', price: '$199.99' },

    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/shirts.jpg', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/shirts.jpg', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/shirts.jpg', price: '$199.99' },
];

const Products = () => {
    return (
        <div className="outer-container">
            <div className="products-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-info">
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">{product.price}</p>
                            <button className="buy-button">Buy Now</button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
        
    );
};

export default Products;