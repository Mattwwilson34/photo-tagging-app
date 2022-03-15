import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import LevelCard from '../LevelCard';
import Gamecube from '../../Images/Gamecube.jpg';

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
