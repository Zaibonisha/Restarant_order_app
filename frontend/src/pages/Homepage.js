import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import burger from '../assets/burger.png';
import steak from '../assets/steak.png';
import sushi from '../assets/sushi.png';
import tacos from '../assets/tacos.png';

const features = [
  {
    img: burger,
    title: 'Classic Cheesy Burger',
    desc: 'Stacked with juicy grilled beef, cheddar cheese, and fresh lettuce, our burgers redefine satisfaction.',
    reverse: false,
  },
  {
    img: sushi,
    title: 'Authentic Sushi Rolls',
    desc: 'Expertly crafted sushi with premium fish and delicate rice, served with soy, wasabi, and love.',
    reverse: true,
  },
  {
    img: tacos,
    title: 'Zesty Street Tacos',
    desc: 'Flame-cooked meat, crisp slaw, and spicy crema all wrapped in a warm tortilla. A fiesta in every bite.',
    reverse: false,
  },
];

function Homepage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: '#fff8f2',
        paddingTop: '6.5rem',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
        color: '#333',
        minHeight: '100vh',
      }}
    >
      {/* Fixed Top Menu Button */}
      <div
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
        }}
      >
        <motion.button
          onClick={() => navigate('/menu')}
          whileHover={{ scale: 1.1, backgroundColor: '#e84e2e' }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '1.2rem 3rem',
            fontSize: '1.5rem',
            fontWeight: '700',
            backgroundColor: '#f95738',
            color: 'white',
            border: 'none',
            borderRadius: '40px',
            boxShadow: '0 10px 25px rgba(249, 87, 56, 0.5)',
            cursor: 'pointer',
            userSelect: 'none',
            transition: 'background-color 0.3s ease',
            letterSpacing: '0.05em',
          }}
        >
          Explore Menu
        </motion.button>
      </div>

      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '2rem 1rem 6rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '4.2rem',
            color: '#f95738',
            marginBottom: '1.2rem',
            fontWeight: '900',
            textShadow: '1px 1px 6px rgba(249, 87, 56, 0.5)',
          }}
        >
          🍴 Welcome to FoodieFiesta
        </h1>
        <p
          style={{
            fontSize: '1.8rem',
            color: '#555',
            lineHeight: 1.5,
            marginBottom: '3rem',
          }}
        >
          Discover gourmet food from around the world, curated just for you. Quality meals, delivered hot and fresh.
        </p>
        <div
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 18px 40px rgba(0,0,0,0.18)',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          <img
            src={steak}
            alt="Hero Steak"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </section>

      {/* Feature Sections */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem 4rem' }}>
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: item.reverse ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3rem',
              marginBottom: '5rem',
              background: '#fff',
              borderRadius: '20px',
              boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
              padding: '1.5rem',
              transition: 'transform 0.3s ease',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{
                flex: '1 1 450px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 14px 35px rgba(0,0,0,0.12)',
                background: '#fff',
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </motion.div>

            <div style={{ flex: '1 1 450px', padding: '0 1rem' }}>
              <h2
                style={{
                  fontSize: '2.8rem',
                  color: '#222',
                  marginBottom: '1rem',
                  fontWeight: '700',
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  fontSize: '1.4rem',
                  color: '#555',
                  lineHeight: 1.7,
                  letterSpacing: '0.02em',
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Homepage;
