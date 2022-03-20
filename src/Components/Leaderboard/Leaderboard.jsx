import './Leaderboard.css';
import React, { useState, useEffect } from 'react';
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
            <th>Name</th>
            <th>Score(s)</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.totalTime}</td>
                  </tr>
                );
              })
            : 'Loading'}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
