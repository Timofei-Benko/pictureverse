import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Credentials } from '../../components/Credentials';
import { CREATE_USER } from '../../queries/CreateUser';
import { CreateUser, CreateUserVariables } from '../../queries/__generated__/CreateUser';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUser, { data, loading, error }] = useMutation<CreateUser, CreateUserVariables>(CREATE_USER, {
    variables: {
      input: {
        email,
        password,
      },
    },
  })

  const handleSubmit = useCallback(async () => {
    await createUser();
  }, [createUser])

  return (
    <Credentials
      title='Sign Up'
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
