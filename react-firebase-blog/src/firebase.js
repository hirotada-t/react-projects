import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXCkSNDM2okJFbTQ1T2nKzipiV-xMvQ9g",
  authDomain: "blog-b17f8.firebaseapp.com",
  projectId: "blog-b17f8",
  storageBucket: "blog-b17f8.appspot.com",
  messagingSenderId: "664686021627",
  appId: "1:664686021627:web:7178228c7f50443302995e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};