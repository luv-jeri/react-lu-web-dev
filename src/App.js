import './App.css';
import Card from './Card';
import EnterDetails from './EnterDetails';
import { useState } from 'react';

const App = () => {
  const [currentCard, setCurrentCard] = useState('React');

  return (
    <div>
      <h1>Use Context</h1>
      <Card title='React' currentCard={currentCard} setter={setCurrentCard} />
      <Card title='Vue' currentCard={currentCard} setter={setCurrentCard} />
      <Card title='Angular' currentCard={currentCard} setter={setCurrentCard} />
    </div>
  );
};

export default App;

