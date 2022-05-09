import { useState } from 'react';
import { signIn } from '../../services/axios';
import Button from '../customButton/customButton.component';
import FormField from '../formField/formField.component';
import './loginForm.styles.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameChangeListener = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeListener = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(signIn(username, password));
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <FormField
        label='Username'
        type='text'
        name='username'
        id='username'
        value={username}
        onChange={(e) => usernameChangeListener(e)}
      />
      <FormField
        label='Password'
        type='password'
        name='password'
        id='password'
        value={password}
        onChange={(e) => passwordChangeListener(e)}
      />
      <Button type='submit'>LOGIN</Button>
    </form>
  );
};

export default LoginForm;
