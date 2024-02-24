// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbaJpUgNO_mG5Gp0aMie9z-o4HV0fyGEs",
  authDomain: "clothes-zone.firebaseapp.com",
  projectId: "clothes-zone",
  storageBucket: "clothes-zone.appspot.com",
  messagingSenderId: "996221887695",
  appId: "1:996221887695:web:f4e19738bbd6d832bcc3ba"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app)

export  {firebase_app,auth}