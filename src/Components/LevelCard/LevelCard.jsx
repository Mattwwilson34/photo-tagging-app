import './LevelCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LevelCard = (props) => {
  const { title } = props;

  return (
    <div className='LevelCard'>
      <Link to='#'>
        <span className='LevelCard-Title'>{title}</span>
      </Link>
    </div>
  );
};

export default LevelCard;
