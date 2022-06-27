// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTYpzeLH1J2qIkstsLwnXSFhjuuf0faUc",
  authDomain: "reanimation-karakol.firebaseapp.com",
  projectId: "reanimation-karakol",
  storageBucket: "reanimation-karakol.appspot.com",
  messagingSenderId: "659879692304",
  appId: "1:659879692304:web:2814f4ed533587c54da295",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
