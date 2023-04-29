import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAwZsdleZK2Ltlwb7Duv3I8E9wDAVy7iPU",
  authDomain: "financeapp-987a9.firebaseapp.com",
  projectId: "financeapp-987a9",
  storageBucket: "financeapp-987a9.appspot.com",
  messagingSenderId: "645454223280",
  appId: "1:645454223280:web:6c0e9d2de01faa5c78e875",
  measurementId: "G-CTL4BEWN8Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const provider=new GoogleAuthProvider();
const db=getFirestore(app);

export {app,auth,provider,db};