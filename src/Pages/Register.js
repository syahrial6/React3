import React from 'react';
import {  useNavigate } from 'react-router-dom';
import useInput from '../CustomHook/useInput';
import { register } from '../utils/api';
function Register() {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const navigate = useNavigate()

    const onRegisterForm= async (event) => {
        event.preventDefault();
    
        const data  = {name,email,password}

        const {error} = register(data)
    
        if (!error) {
          navigate('/')
          alert("berhasil Daftar")
        }
      };
  
    return (
      <div className="input-login">
        <form onSubmit={onRegisterForm}>
        <label htmlFor="name">Nama</label>
            <input type="text" id="name" value={name} onChange={onNameChange} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <button type="submit">Daftar</button>
        </form>
        
      </div>
    );
  }
  export default Register
  