import firebaseApp from '../Firebase/Firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

const getCharacter = async (name) => {
  const docRef = doc(db, 'Characters', name);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};

export default getCharacter;
