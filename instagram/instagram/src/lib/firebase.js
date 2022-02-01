import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyDYJHBaww6gDYbkDxmhiQ4xuxWNJegrPHo",
  authDomain: "instagram-yt-31da4.firebaseapp.com",
  projectId: "instagram-yt-31da4",
  storageBucket: "instagram-yt-31da4.appspot.com",
  messagingSenderId: "993480543089",
  appId: "1:993480543089:web:85038f285392238e3144d0",
};

const Firebase = firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };
