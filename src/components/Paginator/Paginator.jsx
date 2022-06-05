import React from 'react';

const Paginator = ({ page, click }) => {
  return (
    <button className="button button--state" onClick={() => click()}>{page}</button>
  );
};

export default Paginator;