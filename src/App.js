import { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('John Doe');
  const [count, setCount] = useState(0);

  const inputHandler = (e) => {
    setName(e.target.value);
  };
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('I am fucntion inside useEffect');
  }, [count]);

  return (
    <div>
      <h1>useEffect</h1>
      <h1 id='title'>🚀</h1>
      <h2>
        {name} - {count}
      </h2>
      <input onChange={inputHandler} />
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default App;
