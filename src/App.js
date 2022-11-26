import { useState, useEffect} from 'react';

const App = () => {
  const [state, setState] = useState(0);

  const onRender = () => {
    console.log("Heyy I'm rendered");
  };

  useEffect(onRender);

  let count = 0;
  const handleClickCount = () => {
    count++;
    console.log(count);
  };

  const handleClickState = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h1>useState</h1>
      <div>
        <h2>Count - {count}</h2>
        <h2>State - {state}</h2>
        <button onClick={handleClickCount}>Count</button>
        <button onClick={handleClickState}>State</button>
      </div>
    </div>
  );
};

export default App;
