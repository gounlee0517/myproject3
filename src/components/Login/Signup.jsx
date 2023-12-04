import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleInputId = (e) => {
    setId(e.target.value)
  }

  const handleInputPw = (e) => {
    setPassword(e.target.value)
  }

  const handleInputNickname = (e) => {
    setNickname(e.target.value)
  }

  const onSignupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://moneyfulpublicpolicy.co.kr/register", {
        id,
        password,
        nickname
      });
      console.log(response);
      alert('회원가입 성공');
    } catch (error) {
      console.log(error);
      alert('다시 시도해주세요')
    }
  }

  return (
    <div>
      <form onSubmit={onSignupHandler}>
        <p>Sign up</p>
        <input 
          type='text'
          onChange={handleInputId} 
          value={id}
        />
        <input 
          type='password'
          onChange={handleInputPw} 
          value={password}
        />
        <input 
          type='text'
          onChange={handleInputNickname} 
          value={nickname}
        />
        <button>Sign up</button>
      </form>
      
    </div>
  )
}


export default Signup
