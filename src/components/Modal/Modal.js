import React, { useState } from 'react';
import './Modal.scss';

const Modal = props => {
  const { onClose, children } = props;
  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div className="Modal close">
      <div className="modalInner">
        <div className="modalContents">
          <button className="btnBack" onClick={handleClose}>
            <img src="/images/login-img1.png" alt="닫기 버튼" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
