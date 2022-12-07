import './App.css';
import Layout from './components/Layout';
import { createContext, useState } from 'react';

const CartContext = createContext();


const App = () => {
  const [cartItem, setCartItem] = useState(0);
  console.log('App Rendered');
  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
      }}
    >
      <Layout />
    </CartContext.Provider>
  );
};

export default App;
export { CartContext };
