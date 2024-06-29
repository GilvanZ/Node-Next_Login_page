// components/Input.js

import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5rem;
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #0070f3;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
    outline: none;
  }
`;

const Input = ({ id, type, value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{placeholder}</label>
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
