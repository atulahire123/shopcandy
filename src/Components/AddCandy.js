import React, { useState, useContext } from 'react';
import { CandyContext } from './CandyContext';

const AddCandy = () => {
  const { addCandy } = useContext(CandyContext);
  const [candy, setCandy] = useState({ name: '', description: '', price: '' });

  const handleChange = (e) => {
    setCandy({ ...candy, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (candy.name && candy.description && candy.price) {
      addCandy(candy);
      setCandy({ name: '', description: '', price: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <input type="text" name="name" placeholder="Candy Name" value={candy.name} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={candy.description} onChange={handleChange} />
      <input type="text" name="price" placeholder="Price" value={candy.price} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddCandy;
