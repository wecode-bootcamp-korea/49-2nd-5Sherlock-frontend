import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const navdeleteBtn = () => {
    navigate('/');
  };

  const navgoToJoinBtn = () => {
    navigate('/join');
  };

  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  });
  const { id, password } = userInfo;

  const saveUserInfo = event => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  let idReg = /^[a-zA-Z0-9]{1,10}$/;
  let pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const activeBtn = idReg.test(id) && pwReg.test(password);

  const loginBtn = e => {
    e.preventDefault();
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // authorization: 'token',
      },
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('로그인 실패');
        }
      })
      .then(data => {
        console.log(data);
        // navigate('/');
      })
      .catch(error => {
        setErrorMessage('계정정보가 틀렸습니다');
      });
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };
  console.log(userInfo);

  return (
    <div className="Login">
      <header className="header">
        <div className="headerText">로그인</div>
        <img
          className="deleteBtn"
          src="/images/login-img1.png"
          alt="취소버튼"
          onClick={navdeleteBtn}
        ></img>
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
            placeholder="아이디 입력"
            type="id"
            name="id"
            onChange={saveUserInfo}
            onFocus={clearErrorMessage}
          />
          <Input
            scale="first"
            placeholder="패스워드 입력(영문, 숫자, 특수문자 조합)"
            type="password"
            name="password"
            onFocus={clearErrorMessage}
            onChange={saveUserInfo}
          />
          {/* {errorMessage &&   */}
          <div className="error">{errorMessage}</div>

          <button
            className="loginButton"
            onClick={loginBtn}
            disabled={activeBtn ? false : true}
          >
            로그인
          </button>
          <button type="button" className="joinButton" onClick={navgoToJoinBtn}>
            아직 회원이 아니세요? 회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
