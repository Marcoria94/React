import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBwrb1fr1bJ6l5ztUeF6RgNDlpnXZwYkA0",
  authDomain: "comision-34770.firebaseapp.com",
  projectId: "comision-34770",
  storageBucket: "comision-34770.appspot.com",
  messagingSenderId: "48909625465",
  appId: "1:48909625465:web:2212abd1a9361f34870ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)