import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import BestProductList from './pages/Product/BestProductList/BestProductList';
import Signup from './pages/SignUp/SignUp';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/Product/ProductList/ProductList';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/best-product-list" element={<BestProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
