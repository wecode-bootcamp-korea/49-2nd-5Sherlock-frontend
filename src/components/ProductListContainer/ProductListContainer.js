import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProductListCard from '../ProductListCard/ProductListCard';
import './ProductListContainer.scss';

const ProductListContainer = ({ data, onClick }) => {
  const [change, setChange] = useState(true);

  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/productdetail/${id}`);
  };

  const clickLike = (id, isLike) => {
    console.log(id);
    console.log(isLike);
    if (!localStorage.getItem('accessToken')) {
      return alert('로그인부터 하고와~');
    }

    if (data.isLike === false) {
      fetch('http://10.58.52.96:8000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          id: data.id,
          accessToken: '123',
        }),
      }).then(() => {
        setChange(!change);
      });
    } else {
      fetch('http://10.58.52.96:8000/users/signup', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          id: data.id,
          accessToken: '123',
        }),
      }).then(() => {
        setChange(!change);
      });
    }
  };

  if (!data) {
    return;
  }

  return (
    <div className="productListContainer">
      {data.map(data => (
        <ProductListCard key={data.id} data={data} onClick={onClick} />
      ))}
    </div>
  );
};
export default ProductListContainer;
