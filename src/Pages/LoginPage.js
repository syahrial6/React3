import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../CustomHook/useInput';
import { login } from '../utils/api';
 
function InputLogin({loginSuccess}) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    const onSubmitLoginForm= async (event) => {
        event.preventDefault();
    
        const { error, data } = await login({ email, password });
    
        if (!error) {
          loginSuccess(data);
          alert("berhasil Login")
        }
      };
  
    return (
      <div className="input-login">
        <form onSubmit={onSubmitLoginForm}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <button type="submit">Login</button>
        </form>
        <p>
        Belum punya akun ?
        <Link to="/register">Daftar disini!</Link>
      </p>
      </div>
    );
  }
  export default InputLogin
  