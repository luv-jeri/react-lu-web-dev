import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt='logo' id='logo' height='50' />
      <h4 className='title'>Github</h4>
    </header>
  );
}
