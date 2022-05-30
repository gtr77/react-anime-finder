import React from 'react';

const InputSearch = ({ currentValue, handleChange }) => {
  return (
    <input type="text"
      value={currentValue} 
      onChange={handleChange}
    />
  );
};

export default InputSearch;