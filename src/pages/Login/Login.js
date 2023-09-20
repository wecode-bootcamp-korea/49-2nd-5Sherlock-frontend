import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import './Login.scss';

const idReg = /^[a-zA-Z0-9]{4,12}$/;
const pwReg = /^[a-zA-Z0-9]{6,16}$/;

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  });

  const saveUserInfo = event => {
    const { name, value } = event.target;

    clearErrorMessage();
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogin = e => {
    e.preventDefault();

    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        id,
        password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.message === 'login succses') {
          // localStorage.setItem('token', data.token);
          navigate('/Main');
        } else {
          setErrorMessage('아이디 또는 비밀번호가 맞지 않습니다.');
        }
      });
  };
  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  const { id, password } = userInfo;
  const isUserInputValid = idReg.test(id) && pwReg.test(password);

  return (
    <div className="Login">
      <header className="header">
        <span className="headerText">로그인</span>
        <img
          className="deleteBtn"
          src="/images/login-img1.png"
          alt="취소버튼"
          onClick={() => navigate('/')}
        />
      </header>
      <div className="container">
        <span className="loginGuideText">
          아모레퍼시픽 뷰티포인트 통합회원
          <br />
          아이디로 로그인해주세요.
        </span>
        <form className="loginForm">
          <Input
            scale="first"
            placeholder="이메일 입력"
            name="id"
            onChange={saveUserInfo}
            onFocus={clearErrorMessage}
          />
          <Input
            scale="first"
            placeholder="패스워드 입력(영문, 숫자, 특수문자 조합)"
            type="password"
            name="password"
            onChange={saveUserInfo}
            onFocus={clearErrorMessage}
          />
          {/* {errorMessage &&   */}
          <div className="error">{errorMessage}</div>

          {/* <input type="checkbox">아이디저장</input> */}

          <button
            className="loginButton"
            onClick={handleLogin}
            disabled={!isUserInputValid}
          >
            로그인
          </button>
          <button
            type="button"
            className="joinButton"
            onClick={() => navigate('/signup')}
          >
            아직 회원이 아니세요? 회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
