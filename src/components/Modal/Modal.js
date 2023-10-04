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
        <div className="modalContents">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
