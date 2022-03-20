import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  let activeStyle = {
    textDecoration: 'underline',
    color: 'red',
  };

  return (
    <nav className='Nav'>
      <NavLink to='#'>Info</NavLink>
      <span className='Nav-Title'>Photo Tagging App</span>
      <NavLink
        to='leaderboard'
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Leaderboard
      </NavLink>
    </nav>
  );
};

export default Nav;
