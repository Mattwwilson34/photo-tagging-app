import './GameStartOverlay.css';
import React from 'react';
import firebaseApp from '../../Firebase/Firebase';
import {
  collection,
  serverTimestamp,
  getFirestore,
  addDoc,
} from 'firebase/firestore';

const GameStartOverlay = (props) => {
  const { setGameStarted, setTimerOn, setCurrentUserID } = props;

  // Setting DB
  const db = getFirestore(firebaseApp);
  // Initialize user
  const setUser = async () => {
    const userRef = await addDoc(collection(db, 'Users'), {
      name: 'Anonymous',
      timeStart: serverTimestamp(),
    });
    console.log('Anonymous User + start time added w/ ID: ', userRef.id);
    setCurrentUserID(userRef.id);
  };

  return (
    <div className='GameStartOverlay'>
      <div>
        <span>Click the button when you are ready.</span>
        <button
          onClick={() => {
            setUser();
            setGameStarted(true);
            setTimerOn(true);
          }}>
          Start the Game!
        </button>
      </div>
    </div>
  );
};

export default GameStartOverlay;
