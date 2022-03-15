import './App.css';
import React from 'react';
import Nav from '../Nav';
import LevelCard from '../LevelCard';

const App = () => {
  return (
    <div>
      <Nav />
      <LevelCard title='Gamecube' />
    </div>
  );
};

export default App;
