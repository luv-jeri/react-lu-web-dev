import React from 'react';
import { useContext } from 'react';
import { UserConext, CartContext } from '../App';

export default function Demo() {
  const cartValue = useContext(CartContext);


  return <h1>Demo</h1>;
}
