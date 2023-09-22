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
    navigate('/productlist?c=티제품&p=1&sort=추천순&teasort=전체');
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
    </div>
  );
};
export default Main;
