import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const { cart } = useCart();
  const [form, setForm] = useState({ cardNumber: '', expiry: '', cvc: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!form.cardNumber || !form.expiry || !form.cvc) {
      setMessage('Please fill in all payment details');
      return;
    }

    // Simulate payment delay
    setMessage('Processing payment...');
    setTimeout(() => {
      setMessage('✅ Payment successful!');
      // Optionally clear cart and redirect
      setTimeout(() => navigate('/orders'), 2000);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: '20px' }}>
      <h1>Payment</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h3>Order Summary</h3>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ${ (item.price * item.quantity).toFixed(2) }
              </li>
            ))}
          </ul>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>

          <form onSubmit={handlePayment} style={{ marginTop: '20px' }}>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={form.cardNumber}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <br />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={form.expiry}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <br />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={form.cvc}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <br />
            <button type="submit" style={buttonStyle}>
              Pay ${totalPrice.toFixed(2)}
            </button>
          </form>

          {message && <p style={{ marginTop: '15px', color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
        </>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#5cb85c',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Payment;
