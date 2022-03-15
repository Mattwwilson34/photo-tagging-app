import './App.css';
import React from 'react';
import Nav from '../Nav';
import LevelCard from '../LevelCard';
import Gamecube from '../../Images/Gamecube.jpg';

const App = () => {
  return (
    <div>
      <Nav />
      <LevelCard title='Gamecube' img={Gamecube} />
    </div>
  );
};

export default App;
