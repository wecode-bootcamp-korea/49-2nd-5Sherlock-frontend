import React, { useState, useEffect } from 'react';
import './BestProductListContainer.scss';
import { useNavigate, Link } from 'react-router-dom';
import BestProductListCard from '../BestProductListCard/BestProductListCard';

const BestProductListContainer = props => {
  const navigate = useNavigate();
  const { data } = props;

  if (!data) {
    return;
  }

  return (
    <div className="bestProductListContainer">
      {data.map((data, index) => (
        <BestProductListCard index={index} key={data.id} data={data} />
      ))}
    </div>
  );
};
export default BestProductListContainer;
