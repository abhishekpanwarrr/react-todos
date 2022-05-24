import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCeAhN_vzfrowA2u7hzfOoIRrTZzx8AhsM",
  authDomain: "todoapp-49e2e.firebaseapp.com",
  projectId: "todoapp-49e2e",
  storageBucket: "todoapp-49e2e.appspot.com",
  messagingSenderId: "958329188674",
  appId: "1:958329188674:web:901c8829cc38ed63c0d8db",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

export const database = getFirestore(firebase);

///   GACMEFOtLWPiOahEvLo9MLLVbMp2 TODO: USERID
