import './LevelCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LevelCard = (props) => {
  const { title, img } = props;

  return (
    <div
      className='LevelCard'
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <Link to='#'>
        <span className='LevelCard-Title'>{title}</span>
      </Link>
    </div>
  );
};

export default LevelCard;
