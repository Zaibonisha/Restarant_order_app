import React from 'react';
import { useCart } from '../context/CartContext';

// Import images from src/assets
import burger from '../assets/burger.png';
import pizza from '../assets/pizza.png';
import sushi from '../assets/sushi.png';
import pasta from '../assets/pasta.png';
import salad from '../assets/salad.png';
import tacos from '../assets/tacos.png';
import steak from '../assets/steak.png';
import friedRice from '../assets/fried_rice.png';
import noodles from '../assets/noodles.png';
import kebab from '../assets/kebab.png';
import hotdog from '../assets/hotdog.png';
import sandwich from '../assets/sandwich.png';

const foodItems = [
  { id: 1, name: 'Burger', price: 5.99, img: burger },
  { id: 2, name: 'Pizza', price: 8.99, img: pizza },
  { id: 3, name: 'Sushi', price: 12.99, img: sushi },
  { id: 4, name: 'Pasta', price: 7.99, img: pasta },
  { id: 5, name: 'Salad', price: 4.99, img: salad },
  { id: 6, name: 'Tacos', price: 6.99, img: tacos },
  { id: 7, name: 'Steak', price: 15.99, img: steak },
  { id: 8, name: 'Fried Rice', price: 6.49, img: friedRice },
  { id: 9, name: 'Noodles', price: 5.49, img: noodles },
  { id: 10, name: 'Kebab', price: 7.49, img: kebab },
  { id: 11, name: 'Hotdog', price: 3.99, img: hotdog },
  { id: 12, name: 'Sandwich', price: 4.49, img: sandwich },
];

function Menu() {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>Menu</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          justifyItems: 'center',
        }}
      >
        {foodItems.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '16px',
              width: '100%',
              maxWidth: '300px',
              backgroundColor: '#fff',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '12px',
              }}
            />
            <h3 style={{ margin: '0 0 8px' }}>{item.name}</h3>
            <p style={{ margin: '0 0 12px', color: '#666' }}>${item.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(item)}
              style={{
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                padding: '10px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Add to Orders
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
