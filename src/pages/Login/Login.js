import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import './Login.scss';
import Nav from '../../components/Nav/Nav';

const idReg = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const pwReg = /^[.@!#$%&'*+-/=?^_`{|}~\w\d]{9,}$/;

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const saveUserInfo = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });

    if (name === 'email' && !idReg.test(value)) {
      setErrorMessage('이메일 형식이 올바르지 않습니다');
    } else if (name === 'password' && !pwReg.test(value)) {
      setErrorMessage('패스워드는 9자 이상이어야 합니다');
    } else {
      clearErrorMessage();
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    fetch('http://10.58.52.229:8000/users/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        if (result.message === 'signInSuccess' && result.token) {
          localStorage.setItem('token', result.token);
          navigate('/');
        } else {
          setErrorMessage('아이디 또는 비밀번호가 맞지 않습니다.');
        }
      });
  };
  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  const { email, password } = userInfo;
  const isUserInputValid = idReg.test(email) && pwReg.test(password);

  return (
    <div className="Login">
      <header className="header">
        <div className="headerBox">
          <div className="headerText">로그인</div>
          <img
            className="deleteBtn"
            src="/images/login-img1.png"
            alt="취소버튼"
            onClick={() => navigate('/')}
          />
        </div>
      </header>

      <div className="loginBox">
        <Nav />
        <div className="container">
          <span className="loginGuideText">
            오셜록 계정으로 로그인해주세요.
          </span>
          <form className="loginForm">
            <Input
              scale="first"
              placeholder="이메일 입력"
              name="email"
              onChange={saveUserInfo}
              onFocus={clearErrorMessage}
            />
            <Input
              scale="first"
              placeholder="패스워드 입력"
              type="password"
              name="password"
              onChange={saveUserInfo}
              onFocus={clearErrorMessage}
            />
            <div className="error">{errorMessage}</div>
          </form>

          <button
            className="loginButton"
            onClick={handleLogin}
            // disabled={!isUserInputValid}
          >
            로그인
          </button>
          <div className="snsLogin">
            <div className="phoneLogin">
              휴대폰
              <br />
              로그인
            </div>
            <div className="kakaoLogin">
              카카오
              <br />
              로그인
            </div>
            <div className="naverLogin">
              네이버
              <br />
              로그인
            </div>
            <div className="moreLogin">더보기</div>
          </div>
          <div className="joinButton" onClick={() => navigate('/signup')}>
            <span className="a">아직 회원이 아니세요?</span>
            <span className="b">회원가입 &gt; </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
