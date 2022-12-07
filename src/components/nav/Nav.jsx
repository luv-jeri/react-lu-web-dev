import React from 'react';
import './Nav.css';
import { useContext } from 'react';
import { CartContext } from '../../App';

export default function Nav() {
  const value = useContext(CartContext);
  const { cartItem } = value;

  console.log(CartContext);

  return (
    <nav>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      <a href='/contact'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/2838/2838838.png'
          height='30px'
          width='30px'
          alt='cart'
        />
        <span>{cartItem}</span>
      </a>
    </nav>
  );
}
