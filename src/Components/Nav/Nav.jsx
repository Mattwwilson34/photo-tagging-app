import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='Nav'>
      <Link to='#'>Info</Link>
      <span className='Nav-Title'>Photo Tagging App</span>
      <Link to='#'>Leaderboard</Link>
    </nav>
  );
};

export default Nav;
