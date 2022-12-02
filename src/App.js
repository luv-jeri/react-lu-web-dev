import Header from './components/header/Header';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './components/card/Card';

const App = () => {
  return (
    <div>
      <Header />
      <Card />
    </div>
  );
};

export default App;
