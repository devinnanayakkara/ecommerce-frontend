import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <Link to="/" className="text-xl font-bold">E-Store</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
        </nav>
   );
};

export default Navbar;