// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArtEAVMG2oOMm6o7YnxNEEDM3E2EHraJY",
  authDomain: "todo-f0b5d.firebaseapp.com",
  projectId: "todo-f0b5d",
  storageBucket: "todo-f0b5d.appspot.com",
  messagingSenderId: "229875492169",
  appId: "1:229875492169:web:09178f588d08a866aa6698",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
