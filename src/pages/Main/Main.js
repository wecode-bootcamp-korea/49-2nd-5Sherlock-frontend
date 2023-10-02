import './Main.scss';
import { useNavigate, Link } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToProductList = () => {
    navigate('/product-list');
  };

  const goToBestProductList = () => {
    navigate('/best-product-list');
  };

  return (
    <div className="Main">
      <div className="logInBtn" onClick={goToLogin}>
        로그인
      </div>
      <div className="signUpBtn" onClick={goToSignUp}>
        회원가입
      </div>
      <div className="productListBtn" onClick={goToProductList}>
        제품리스트
      </div>
      <div className="productListBtn" onClick={goToBestProductList}>
        베스트리스트
      </div>
    </div>
  );
};
export default Main;
