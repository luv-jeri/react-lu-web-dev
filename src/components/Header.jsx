import React, { useContext } from 'react';
import { CartContext } from '../App';

export default function Header() {
  const { cartItem, setCartItem } = useContext(CartContext);
  return (
    <div>
      <button
        onClick={() => {
          setCartItem(cartItem + 1);
        }}
      >
        Add Item to cart
      </button>
    </div>
  );
}
