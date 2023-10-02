import React from 'react';
import './Modal.scss';

const Modal = props => {
  const { cont, subCont } = props;
  return (
    <div className="Modal">
      <div className="modalInner">
        <div className="modalContents">
          <p>장바구니로 이동하시겠습니까?</p>
          <div className="btnWrapper">
            <button className="">취소</button>
            <button>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
