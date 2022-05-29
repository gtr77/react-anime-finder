import React from 'react';

const InputSearch = ({ currentValue, handleChange }) => {
  console.log("PROPSs searchValue", currentValue)
  console.log("PROPSs handleChange", handleChange)

  return (
    <input type="text"
      value={currentValue} 
      onChange={handleChange}
    />
  );
};

export default InputSearch;