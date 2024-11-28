import React from 'react';

const ProductList = () => {
  // Mock data for demonstration purposes
  const products = [
    { id: 1, name: 'Garden Shovel', price: '$10' },
    { id: 2, name: 'Watering Can', price: '$15' },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
