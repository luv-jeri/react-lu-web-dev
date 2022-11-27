// import { useState, useReducer } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const [state, dispatch] = useReducer((state, action) => {
//     if (action === 'inc') return state + 1;
//     if (action === 'dec') return state - 1;

//     return state;
//   }, 0);

//   const handleInc = () => {
//     setCount(count + 100409);
//   };

//   const handleClick = () => {
//     dispatch();
//   };

//   return (
//     <div>
//       <h1>useReducer</h1>
//       <h2>Count : {count}</h2>
//       <h2>State : {state}</h2>
//       <button onClick={handleInc}>➕</button>
//       <button onClick={handleClick}>🚀</button>
//     </div>
//   );
// };

// export default App;

import { useReducer } from 'react';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <h1>useReducer</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch({ type: 'inc' })}>➕</button>
      <button onClick={() => dispatch({ type: 'dec' })}>➖</button>
    </div>
  );
};

export default App;
