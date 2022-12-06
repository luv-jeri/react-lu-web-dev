import React from 'react';

export default function Card({ title, currentCard, setter }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        margin: '1rem',
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: title === currentCard ? '#6D67E4' : '#FF9E9E',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        flexDirection: 'column',
      }}
    >
      <h2>{title}</h2>
      <button
        onClick={() => {
          setter(title); // *setCurrentCard(title)
        }}
      >
        <span role='img'>{title === currentCard ? 'Selected' : 'Select Me'}</span>
      </button>
    </div>
  );
}
