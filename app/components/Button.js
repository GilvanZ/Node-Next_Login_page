// components/Button.js

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;

  &:hover {
    background-color: #f09cc5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(235, 11, 250, 0.5);
  }
`;

const Button = ({ type = 'button', children, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
