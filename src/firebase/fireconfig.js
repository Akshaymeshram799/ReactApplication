// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqXJhohrKwsrJzTrhCPPOb40LgrYWMVas",
  authDomain: "webapp-8eb7e.firebaseapp.com",
  projectId: "webapp-8eb7e",
  storageBucket: "webapp-8eb7e.appspot.com",
  messagingSenderId: "859962066468",
  appId: "1:859962066468:web:312cf2a908dc1fa022bab1",
  measurementId: "G-JKXFCQYEG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);