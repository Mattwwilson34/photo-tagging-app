import firebaseApp from '../Firebase/Firebase';
import {
  getFirestore,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

// End time stamp
const setUserEndTime = async (userID) => {
  const userRef = doc(db, 'Users', userID);
  await updateDoc(userRef, {
    timeEnd: serverTimestamp(),
  });
  console.log('User end time set', userID);
};

// store total time to complete game
const setUserTimeToComplete = async (userID) => {
  const userRef = doc(db, 'Users', userID);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    const userTimeData = docSnap.data();
    const timeToComplete = calcUserTimeToComplete(userTimeData);

    await updateDoc(userRef, {
      totalTime: timeToComplete,
    });
    console.log('Total time', timeToComplete);
  } else {
    console.log('No such document!');
  }
};

// calc total time to complete game
const calcUserTimeToComplete = (userTimeData) => {
  console.log(userTimeData);
  const startTime =
    userTimeData.timeStart.seconds * 1000000000 +
    userTimeData.timeStart.nanoseconds;
  const endTime =
    userTimeData.timeEnd.seconds * 1000000000 +
    userTimeData.timeEnd.nanoseconds;
  const timeDifference = (endTime - startTime) / 1000000000;
  return timeDifference.toFixed(2);
};

// update username from input when game is over
const updateUsername = async (userID, username) => {
  const userRef = doc(db, 'Users', userID);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    await updateDoc(userRef, {
      name: username,
    });
    console.log('Username updated to:', username);
  } else {
    console.log('No such document!');
  }
};

export { setUserEndTime, setUserTimeToComplete, updateUsername };
