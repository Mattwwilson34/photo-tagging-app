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
      <NavLink to='/' className='Nav-Title'>
        {({ isActive }) => (isActive ? 'Photo tagging app' : 'Home')}
      </NavLink>
      <NavLink
        to='leaderboard'
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Leaderboard
      </NavLink>
    </nav>
  );
};

export default Nav;
