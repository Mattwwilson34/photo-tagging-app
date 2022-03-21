import './Info.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Info = () => {
  return (
    <div className='Info'>
      <h1>
        Photo tagging app <SocialIcon url='https://github.com/Mattwwilson34' />
      </h1>
      <span className='Info-CreatedBy'>Created by: Matt Wilson</span>
      <h2>Description:</h2>
      <p>
        This app was built as part of the Odin projecs JavaScript course. This
        project was the most complex project to date and required utilizing all
        the skills we had learned throughout the course inlcluding:
      </p>
      <ul>
        <li>HTML, CSS, JS</li>
        <li>ReactJS</li>
        <li>React Router</li>
        <li>Firebase Firestore</li>
        <li>Jest</li>
        <li>React testing-library</li>
      </ul>

      <h2>Some of the unique challenges to this project included:</h2>
      <ul>
        <li>Managing large images without distortion</li>
        <li>Image coordinate calculations</li>
        <ul>
          <li>Calculate locations of characters within image</li>
          <li>
            Make sure coordinates are relative and not effected by screen
            size/resolution
          </li>
          <li>Get real time coordinates when users click on the image</li>
        </ul>
        <li>
          Store static character coordinates in firebase firestore database
        </li>
        <li>
          Compare users clicked coordinates to correct database coordinates
        </li>
        <li>Implement a timer that begins when the game starts</li>
        <ul>
          <li>Store timer data in database to prevent user tampering</li>
        </ul>
        <li>
          Handle both anonymous users as well as allow users to input a username
          to store their score on the leaderboad
        </li>
      </ul>
    </div>
  );
};

export default Info;
