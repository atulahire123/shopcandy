import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CandyContext = createContext();

const CandyProvider = ({ children }) => {
  const [candies, setCandies] = useState([]);
  const [cart, setCart] = useState([]);

  const crudUrl = 'https://crudcrud.com/api/6e9e249d23d9413d85094a623c820afd';

  useEffect(() => {
    // Fetch initial candies from CrudCrud
    axios.get(`${crudUrl}/candies`)
      .then(response => setCandies(response.data))
      .catch(error => console.error('Error fetching candies:', error));

    // Fetch initial cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addCandy = async (candy) => {
    try {
      const response = await axios.post(`${crudUrl}/candies`, candy);
      setCandies(prev => [...prev, response.data]);
    } catch (error) {
      console.error('Error adding candy:', error);
    }
  };

  const addToCart = (candy, quantity) => {
    setCart(prev => [...prev, { ...candy, quantity }]);
  };

  return (
    <CandyContext.Provider value={{ candies, addCandy, cart, addToCart }}>
      {children}
    </CandyContext.Provider>
  );
};

export { CandyProvider, CandyContext };
