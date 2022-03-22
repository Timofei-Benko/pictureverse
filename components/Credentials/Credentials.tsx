import { Dispatch, FormEvent, SetStateAction } from 'react';

import styles from './Creadentials.module.sass';

interface IProps {
  title: string;
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  onSubmit?: () => void;
}

export const Credentials = ({ title, email, password, setEmail, setPassword, onSubmit }: IProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && onSubmit();
  }

  return (
    <div className={styles.wrap}>
      <h1>{title}</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          className={styles.submit}
          type="submit"
          value='Submit'
        />
      </form>
    </div>
  )
}
