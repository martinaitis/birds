import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCTSHA-4wuJir4m1dxKxVv2NO8RjgSMbSI",
  authDomain: "birds-34fce.firebaseapp.com",
  databaseURL: "https://birds-34fce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "birds-34fce",
  storageBucket: "birds-34fce.appspot.com",
  messagingSenderId: "465945682271",
  appId: "1:465945682271:web:e2d3ff0aee3861bd8616ea",
  measurementId: "G-VBNBXCTXZ4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;