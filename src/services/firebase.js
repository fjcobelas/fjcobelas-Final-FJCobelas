// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCey1Vzp75EgK-3It9TmUEU3s1jCs12kBo",
    authDomain: "fjcobelas-final-fjcobelas.firebaseapp.com",
    projectId: "fjcobelas-final-fjcobelas",
    storageBucket: "fjcobelas-final-fjcobelas.appspot.com",
    messagingSenderId: "557578168244",
    appId: "1:557578168244:web:f853ccb8248006c07074e1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db