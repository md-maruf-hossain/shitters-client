// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGjpKYr4d-HhM_fIopr9rePR_ZRK4e-B4",
  authDomain: "shutter-photograph.firebaseapp.com",
  projectId: "shutter-photograph",
  storageBucket: "shutter-photograph.appspot.com",
  messagingSenderId: "229555913096",
  appId: "1:229555913096:web:6bb3e8e855375ad9ecfa3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
