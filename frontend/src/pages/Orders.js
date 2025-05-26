import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Orders() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px' }}>
      <h1>Your Orders</h1>
      {cart.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li
                key={item.id}
                style={{
                  marginBottom: 10,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>
                  <strong>{item.name}</strong> x {item.quantity} - ${ (item.price * item.quantity).toFixed(2) }
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: '#f95738',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={goToCart}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Go to Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Orders;
