import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        padding: '15px 30px',
        backgroundColor: '#f95738',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        fontSize: '1.2rem',
        fontWeight: 'bold',
      }}
    >
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/menu">Menu</Link>
        {user && <Link style={linkStyle} to="/cart">Cart</Link>}
        {user && <Link style={linkStyle} to="/checkout">Checkout</Link>}
        {user && <Link style={linkStyle} to="/orders">Orders</Link>}
      </div>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        {user ? (
          <>
            <span style={{ color: '#fff' }}>Welcome, {user.name}</span>
            <button onClick={logout} style={buttonStyle}>Logout</button>
          </>
        ) : (
          <>
            <Link style={linkStyle} to="/login">Login</Link>
            <Link style={linkStyle} to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  transition: 'color 0.3s',
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#f95738',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default Navbar;
