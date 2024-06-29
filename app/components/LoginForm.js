// components/LoginForm.js

'use client'
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import axios from 'axios';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSide = styled.div`
  flex: 1;
  background-image: url('/path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); // Cor de fundo transparente escura
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1); // Fundo transparente para o formulário
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ErrorMessage = styled.p`
  color: red;
`;

const StyledLink = styled.a`
  margin-top: 1rem;
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Substitua pela URL da sua API de autenticação
      const response = await axios.post('/api/login', { email, password });
      if (response.data.success) {
        alert('Login bem-sucedido!');
        // Redirecione o usuário para a página principal ou qualquer outra
      } else {
        setError('Credenciais inválidas. Tente novamente.');
      }
    } catch (err) {
      setError('Ocorreu um erro. Tente novamente.');
    }
  };

  return (
    <Container>
      <LeftSide />
      <RightSide>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
          </Form>
          <Link href="/siginup" passHref>
            <StyledLink>Ainda não tem uma conta?</StyledLink>
          </Link>
        </FormContainer>
      </RightSide>
    </Container>
  );
};

export default LoginForm;
