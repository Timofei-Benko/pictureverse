import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { Form } from '../../components/Form';
import { VALIDATE_USER_CREDENTIALS } from '../../queries/ValidateUserCredentials';
import {
  ValidateUserCredantials,
  ValidateUserCredantialsVariables
} from '../../queries/__generated__/ValidateUserCredantials';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const [validateUserCredentials] = useMutation<ValidateUserCredantials, ValidateUserCredantialsVariables>(VALIDATE_USER_CREDENTIALS, {
    variables: {
      input: {
        email,
        password,
      }
    },
    onCompleted: async ({ validateUserCredantials}) => {
      if (validateUserCredantials.valid) {
        console.log(true);
        localStorage.setItem('isAuthenticated', '1')
        dispatch({
          type: 'SET_IS_AUTHENTICATED',
          payload: true,
        });
        await router.push('/', { pathname: '/'});
      } else {
        setErrorMessage('Incorrect email or password')
      }
    }
  });

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    await validateUserCredentials();
  }, [validateUserCredentials]);

  return (
    <Form
      title='Sign In'
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
    >
      <Form.Input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form>
  );
};

export default Login;
