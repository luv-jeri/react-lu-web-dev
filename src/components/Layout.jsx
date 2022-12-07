import React from 'react';
import Nav from './nav/Nav';
import './Layout.css';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import { createContext } from 'react';

const RareContext = createContext();

export default function Layout({ header, section, footer }) {
  console.log('Layout Rendered');
  return (
    <div>
      <Nav />
      <div className='container'>
        <Header />
      </div>
      <div className='container'>
        <Section />
      </div>
      <div className='container'>
        <Footer />
      </div>
    </div>
  );
}

export { RareContext };
