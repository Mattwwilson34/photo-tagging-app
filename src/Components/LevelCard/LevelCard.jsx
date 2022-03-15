import './LevelCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LevelCard = (props) => {
  const { img } = props;

  return (
    <div
      className='LevelCard'
      style={{
        backgroundImage: `url(${img})`,
      }}>
      <Link to='/game'></Link>
    </div>
  );
};

export default LevelCard;
