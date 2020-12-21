import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import { Container, FormContent } from './styles';

interface FormData {
  email: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      const response = await api.post('sessions', { email: data.email });

      const { id } = response.data;

      localStorage.setItem('user', id);

      history.push('/dashboard');
    },
    [history],
  );

  return (
    <Container>
      <Card>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{' '}
          <strong>talentos</strong> para sua empresa.
        </p>

        <Form onSubmit={handleSubmit}>
          <FormContent>
            <label htmlFor="email">E-MAIL *</label>

            <Input id="email" name="email" placeholder="Seu melhor e-mail" />

            <Button type="submit">Entrar</Button>
          </FormContent>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
