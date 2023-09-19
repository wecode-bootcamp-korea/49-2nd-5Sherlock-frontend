import React from 'react';
import './Input.scss';

const Input = props => {
  const {
    type,
    value,
    placeholder,
    onChange,
    onFocus,
    name,
    scale,
    className = 'inputBox',
  } = props;
  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      scale={scale}
    />
    // 로그인, 아이디찾기, 비밀번호 찾기에서 활용 가능
  );
};
export default Input;
