import type { NextPage } from 'next';
import { useState } from 'react';
import { Credentials } from '../../components/Credentials';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <Credentials
        title='Sign In'
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
  );
};

export default Login;
