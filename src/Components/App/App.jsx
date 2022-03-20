import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
