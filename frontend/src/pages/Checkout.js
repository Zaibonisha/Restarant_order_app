import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    navigate('/payment');  // ✅ Navigate to Payment page
  };

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px' }}>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items before checking out.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} style={{ marginBottom: 10 }}>
                <strong>{item.name}</strong> x {item.quantity} - ${ (item.price * item.quantity).toFixed(2) }
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={handlePayment}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
