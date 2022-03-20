import firebaseApp from '../Firebase/Firebase';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

// Initial time stamp
const setUser = async () => {
  const UserRef = await addDoc(collection(db, 'Users'), {
    name: 'Anonymous',
    timeStart: serverTimestamp(),
  });
  console.log('Anonymous User + start time added w/ ID: ', UserRef.id);
};
// End time stamp
const setUserEndTime = async (userID) => {
  const UserRef = doc(db, 'Users', userID);
  await updateDoc(UserRef, {
    timeEnd: serverTimestamp(),
  });
};

const setUserTimeToComplete = async (userID) => {
  const UserRef = doc(db, 'Users', userID);
  const docSnap = await getDoc(UserRef);

  if (docSnap.exists()) {
    const userTimeData = docSnap.data();
    const timeToComplete = calcUserTimeToComplete(userTimeData);

    await updateDoc(UserRef, {
      totalTime: timeToComplete,
    });
  } else {
    console.log('No such document!');
  }
};

const calcUserTimeToComplete = (userTimeData) => {
  const startTime =
    userTimeData.timeStart.seconds * 1000000000 +
    userTimeData.timeStart.nanoseconds;
  const endTime =
    userTimeData.timeEnd.seconds * 1000000000 +
    userTimeData.timeEnd.nanoseconds;
  const timeDifference = (endTime - startTime) / 1000000000;
  return timeDifference.toFixed(2);
};

export { setUser, setUserEndTime, setUserTimeToComplete };
