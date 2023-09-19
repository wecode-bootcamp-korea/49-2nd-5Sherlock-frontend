import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import BestProductList from './pages/ProductList/BestProductList/BestProductList';
import Signup from './pages/SignUp/SignUp';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bestProductList" element={<BestProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
