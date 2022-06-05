import React from 'react';
import './inputSearch.scss';

const InputSearch = ({ currentValue, handleChange }) => {
  return (
    <input type="text"
      value={currentValue} 
      onChange={handleChange}
    />
  );
};

export default InputSearch;