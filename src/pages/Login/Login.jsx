import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

import './Login.scss';



const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  return (
    <div className='app__login'>
      <form onSubmit={ handleSubmit }>
        <div className="formInput">
          <label>example@gmail.com</label>
          <input 
            type="email" 
            placeholder=' ' 
            value={ email }
            onChange={ (e) => setEmail(e.target.value) } 
            required 
          />
        </div>
        <div className="formInput">
          <label>password</label>
          <input 
            type="password" 
            placeholder=' '
            value={ password }
            onChange={ (e) => setPassword(e.target.value) } 
            required 
          />
        </div>
        {
          error &&
          <label className='error'>Wrong Email or Password</label>
        }
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;