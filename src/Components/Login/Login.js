import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginLost from './LoginLost';
import LoginReset from './LoginReset';

export const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginLost />} />
        <Route path="resetar" element={<LoginReset />} />
      </Routes>
    </div>
  );
};
