import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCey1Vzp75EgK-3It9TmUEU3s1jCs12kBo",
  authDomain: "fjcobelas-final-fjcobelas.firebaseapp.com",
  projectId: "fjcobelas-final-fjcobelas",
  storageBucket: "fjcobelas-final-fjcobelas.appspot.com",
  messagingSenderId: "557578168244",
  appId: "1:557578168244:web:f853ccb8248006c07074e1"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


