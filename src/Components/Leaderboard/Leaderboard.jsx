import './Leaderboard.css';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import firebaseApp from '../../Firebase/Firebase';
import {
  getFirestore,
  collection,
  query,
  getDocs,
  orderBy,
} from 'firebase/firestore';

const Leaderboard = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      const usersArray = [];
      const db = getFirestore(firebaseApp);
      const usersRef = query(collection(db, 'Users'));
      const q = query(usersRef, orderBy('totalTime'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        usersArray.push(doc.data());
      });
      setUsers(usersArray);
    })();
  }, []);

  return (
    <div className='Leaderboard'>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score(s)</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user, i) => {
              return (
                <tr key={uniqid()}>
                  <td className='Leaderboard-Rank'>{i + 1}</td>
                  <td>{user.name}</td>
                  <td className='Leaderboard-Score'>{user.totalTime}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Loading</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
