import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBSOfu2OhYwiwK0b8nXIpex9smngKRSvS4',
  authDomain: 'photo-tagging-app-f7935.firebaseapp.com',
  projectId: 'photo-tagging-app-f7935',
  storageBucket: 'photo-tagging-app-f7935.appspot.com',
  messagingSenderId: '1042372365403',
  appId: '1:1042372365403:web:dcf3085b89079514bc037e',
  measurementId: 'G-9RCT8DHE9M',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
