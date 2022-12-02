import React, { useState, useEffect } from 'react';
import './Card.css';

export default function Card() {
  const [value, setValue] = useState('title');
  const [count, setCount] = useState(0);

  const onMount = () => {
    console.log('as soon as component mounts 🦄');
    return () => {
      console.log('just before component unmounts 😡');
    };
  };

  useEffect(onMount, [value]);

  return (
    <div className='card-wrapper'>
      <div className='card'>
        <div className='card-image'>
          <img
            src={
              'https://images.unsplash.com/photo-1669977041372-51bbee0b8a09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            alt='card'
          />
        </div>
        <div className='card-content'>
          <h2 className='card-title'>{value} </h2>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
          </p>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className='card-img-input'
            placeholder='Enter Card Image URL'
          />
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className='card-btn'
          >
            Update Image
          </button>
        </div>
      </div>
    </div>
  );
}
