// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTNEAL7VAFuhDr_vxWBQg5corbGoNxOLg",
  authDomain: "e-commerce-7fc84.firebaseapp.com",
  projectId: "e-commerce-7fc84",
  storageBucket: "e-commerce-7fc84.appspot.com",
  messagingSenderId: "268418362077",
  appId: "1:268418362077:web:4af1f79826b7afc9030934"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;