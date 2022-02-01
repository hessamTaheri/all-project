
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKtZ6Ey5y5LRGG7KVuBRfQQWB3b-JWC08",
  authDomain: "mentor-auth-production.firebaseapp.com",
  projectId: "mentor-auth-production",
  storageBucket: "mentor-auth-production.appspot.com",
  messagingSenderId: "709699046320",
  appId: "1:709699046320:web:f18929b1f5e43c57386475"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore()