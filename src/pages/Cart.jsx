import React from 'react';
import { useCart } from '../context/CartContext'; 

const Cart = () => {
  const { cartItems } = useCart(); 

  return (
    <div className="p-4 animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-800 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-gray-600 text-lg font-semibold">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
