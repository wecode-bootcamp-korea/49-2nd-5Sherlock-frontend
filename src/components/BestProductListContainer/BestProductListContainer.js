import React from 'react';
import './BestProductListContainer.scss';
import { useNavigate, Link } from 'react-router-dom';
import BestProductListCard from '../BestProductListCard/BestProductListCard';

const BestProductListContainer = ({ data, onClick }) => {
  if (!data) {
    return;
  }

  return (
    <div className="bestProductListContainer">
      {data.map((data, index) => (
        <BestProductListCard
          index={index}
          key={data.id}
          data={data}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
export default BestProductListContainer;
