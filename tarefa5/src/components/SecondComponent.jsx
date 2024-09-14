import React, { useState } from 'react';

const SecondComponent = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Qual seu nome?</h2>
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder= "Digite seu nome:"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px solid green' : '1px solid gray',
        }}
      />
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <b><p>Digitando...</p></b> : <b><p>Digite!</p></b>}
      </div>
      <b><p>Nome: {inputValue}</p></b>
    </div>
  );
};

export default SecondComponent;