import { useState, useEffect } from 'react';

let normalVariableOutside = 0;

const App = () => {
  let normalVariable = 0;

  const handleNormalVariable = () => {
    normalVariable = 3453456;
    console.log('normalVariable', normalVariable);
  };

  const handlNormalVariableOutside = () => {
    normalVariableOutside = normalVariableOutside + 1;
    console.log('normalVariableOutside', normalVariableOutside);
  };

  const [state, setState] = useState(0);

  return (
    <div>
      <h1>useState</h1>
      <div>
        <h3>normalVariable : {normalVariable}</h3>
        <h3>normalVariableOutside : {normalVariableOutside}</h3>
        <h3>state : {state}</h3>
        <button onClick={handleNormalVariable}> normalVariable Change </button>
        <button onClick={handlNormalVariableOutside}>
          normalVariableOutside Change{' '}
        </button>

        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          Re render
        </button>
      </div>
    </div>
  );
};

export default App;
