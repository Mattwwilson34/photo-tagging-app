import './LevelCard.css';
import React from 'react';

const LevelCard = (props) => {
  const { title } = props;

  return (
    <div className='LevelCard'>
      <span className='LevelCard-Title'>{title}</span>
    </div>
  );
};

export default LevelCard;
