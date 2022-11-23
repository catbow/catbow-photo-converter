import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from './components/common/modal/\bModal';
import Home from './pages/Home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
