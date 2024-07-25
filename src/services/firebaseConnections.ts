// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQqy9M4aV4xH0biV6ACf2t7EtsBQ1Nuzw",
  authDomain: "devlinks-5710e.firebaseapp.com",
  projectId: "devlinks-5710e",
  storageBucket: "devlinks-5710e.appspot.com",
  messagingSenderId: "291687504986",
  appId: "1:291687504986:web:68aff9aa836f13a3170c63",
  measurementId: "G-9P8DPJEXLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };