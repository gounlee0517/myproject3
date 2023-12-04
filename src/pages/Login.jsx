import React, { useEffect, useState } from 'react'
import Signup from "../components/Login/Signup"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogined } from '../redux/modules/isLogined';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogined = useSelector((state) => state.isloginedSlice.isLogined);

    const handleInputId = (e) => {
      setId(e.target.value)
    }

    const handleInputPw = (e) => {
      setPassword(e.target.value)
    }

    const onSubmitHandler = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("https://moneyfulpublicpolicy.co.kr/login?expiresIn=10h", {
          id,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        });
        if (response.data.accessToken) {
          localStorage.setItem('login-token', response.data.accessToken);
        }
        console.log(response);
        alert('로그인 성공');
        if (response.status === 200) {
          dispatch(setIsLogined(true));
        }
      } catch (error) {
        console.log(error);
        alert('실패')
      }
    }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h4>LOGIN</h4>
        <input 
            type='text'
            value={id} 
            onChange={handleInputId}
            placeholder='ID'
        />

        <input 
            type='password'
            value={password}
            onChange={handleInputPw}
            placeholder='Password'
        />

        <p onClick={() => navigate('/signup') }>sign up</p>
        <button>Sign in</button>
      </form>
    </div>
  )
}

export default Login
