import React, { useContext } from 'react';
import { CandyContext } from './CandyContext';

const CandyList = () => {
  const { candies, addToCart } = useContext(CandyContext);

  return (
    <div>
      {candies.map((candy, index) => (
        <div key={index}>
          <h3>{candy.name}</h3>
          <p>{candy.description}</p>
          <p>Price: ${candy.price}</p>
          <button onClick={() => addToCart(candy, 1)}>Buy 1</button>
          <button onClick={() => addToCart(candy, 2)}>Buy 2</button>
          <button onClick={() => addToCart(candy, 3)}>Buy 3</button>
        </div>
      ))}
    </div>
  );
};

export default CandyList;
