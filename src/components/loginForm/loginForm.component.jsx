import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../services/axios';
import { setUser } from '../../store/userSlice';
import Button from '../customButton/customButton.component';
import FormField from '../formField/formField.component';
import './loginForm.styles.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [transactionInProcess, setTransactionInProcess] = useState(false);
  const dispatch = useDispatch();

  const usernameChangeListener = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeListener = (e) => {
    setPassword(e.target.value);
  };
  const logInHandler = async (e) => {
    e.preventDefault();
    setTransactionInProcess(true);
    try {
      var res = await signIn(username, password);
      dispatch(setUser({ username: username, token: password }));
    } catch (error) {
      alert(error.response.data.error_description);
      console.log(error.response.data.error_description);
    }
    setTransactionInProcess(false);
  };

  return (
    <form onSubmit={(e) => logInHandler(e)}>
      <FormField
        label='Username'
        type='text'
        name='username'
        id='username'
        required
        value={username}
        onChange={(e) => usernameChangeListener(e)}
      />
      <FormField
        label='Password'
        type='password'
        name='password'
        id='password'
        required
        value={password}
        onChange={(e) => passwordChangeListener(e)}
      />
      <Button type='submit' disabled={transactionInProcess}>
        LOGIN
      </Button>
    </form>
  );
};

export default LoginForm;
