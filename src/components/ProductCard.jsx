import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up"
    >
      
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 mt-1">${product.price}</p>
            <Link to={`/product/${product._id}`} className="text-blue-600 mt-2 inline-block">View</Link>
        </div>   
    </div>
  );
};

export default ProductCard;
