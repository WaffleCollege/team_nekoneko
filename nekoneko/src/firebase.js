
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUGxTYYZPaE4sg3qqaeUpGWgH2Sx-cDoI",
  authDomain: "fir-login-ba23c.firebaseapp.com",
  projectId: "fir-login-ba23c",
  storageBucket: "fir-login-ba23c.appspot.com",
  messagingSenderId: "300753264833",
  appId: "1:300753264833:web:bcfd49ee34af90f6bc3440"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};