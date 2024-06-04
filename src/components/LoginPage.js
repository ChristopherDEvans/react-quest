import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Hints from './Hints';
import styles from '../styles/LoginPage.module.css';

const loginHints = {
  Authentication: 'Click the login button to authenticate. This sets the isLoggedIn state to true.',
  ContextUsage: 'The AuthContext is used to manage the authentication state across the application.'
};

function LoginPage() {
  const { login } = useContext(AuthContext);

  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <Hints hints={loginHints} />
      <button className={styles.loginButton} onClick={login}>Login</button>
    </div>
  );
}

export default LoginPage;
