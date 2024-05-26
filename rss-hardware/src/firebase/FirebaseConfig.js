// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbtM67fEhDgYNE9wFMY3_fl7jO5Nfw4I0",
  authDomain: "rss-hardware.firebaseapp.com",
  projectId: "rss-hardware",
  storageBucket: "rss-hardware.appspot.com",
  messagingSenderId: "757742822564",
  appId: "1:757742822564:web:6ab31604f53b5087017231",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
