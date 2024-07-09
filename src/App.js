import React from 'react';
import { CandyProvider } from './Components/CandyContext';
import AddCandy from './Components/AddCandy';
import CandyList from './Components/CandyList';
import Cart from './Components/Cart';

const App = () => {
  return (
    <CandyProvider>
      <AddCandy />
      <CandyList />
      <Cart />
    </CandyProvider>
  );
};

export default App;
