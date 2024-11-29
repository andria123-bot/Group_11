import React from 'react';

const NameList = () => {
  const names = ['Andria', 'Kato', 'Salome', 'Giorgi', 'Tamari'];

  return (
    <div>
      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default NameList;
