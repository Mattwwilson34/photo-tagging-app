import './Info.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Info = () => {
  return (
    <div className='Info'>
      <h1>Photo tagging app</h1>
      <span>
        Created by: Matt Wilson
        <SocialIcon url='https://github.com/Mattwwilson34' />
      </span>
      <p>
        This app was built as part of the Odin projecs JavaScript course. This
        project was the most complex project to date and required use of all
        content learned in the course up to this poit inlcluding:
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Standard JavaScript</li>
          <li>ReactJS</li>
          <li>React Router</li>
          <li>Firebase Firestore</li>
          <li>Jest</li>
          <li>React testing-library</li>
        </ul>
      </p>

      <p>
        Some of the unique challenges to this project included:
        <ul>
          <li>Managing large images without distortion</li>
          <li>Image coordinate calculations</li>
          <ul>
            <li>Calculate locations of characters within image</li>
            <li>
              Make sure coordinates are relative an not effected by screen
              size/resolution
            </li>
            <li>Get real time coordinates when use clicks on image</li>
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
            Handle both anonymous users as well as allow users to input a
            username to store their score on the leaderboad
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Info;
