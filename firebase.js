import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBzCWGsGKh6BPZkUp4UFQ8v9r4JtYSg7g4",
  authDomain: "betmet-523bd.firebaseapp.com",
  projectId: "betmet-523bd",
  storageBucket: "betmet-523bd.appspot.com",
  messagingSenderId: "662704291979",
  appId: "1:662704291979:web:2cffb95d3a431b51cd148e",
  measurementId: "G-F514YLJ2VY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
