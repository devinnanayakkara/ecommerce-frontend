import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import { useCart } from '../context/CartContext'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    api.get(`/products`).then(res => {
      const found = res.data.find(p => p._id === id);
      setProduct(found);
    });
  }, [id]);

  if (!product) return <p className="text-center mt-10 text-lg">Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-4 animate-fade-in ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-3xl font-bold mt-4 text-gray-800">{product.name}</h1>
      <p className="text-green-600 mt-2 text-xl font-semibold">${product.price}</p>
      <p className="text-gray-600 text-lg mt-4 font-semibold">{product.description}</p>
      <button
        onClick={() => addToCart(product)} 
        className="mt-6 bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-2 rounded-lg shadow-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
