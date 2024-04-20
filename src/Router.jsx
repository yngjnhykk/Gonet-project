import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import RegisterPage from './pages/register/RegisterPage';
import EditPage from './pages/edit/EditPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/edit' element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
