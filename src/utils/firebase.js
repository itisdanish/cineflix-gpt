import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA5mpcsuVPNOfIASMG78CkpXH7FwAlho8Q',
  authDomain: 'cineflix-gpt-1e96d.firebaseapp.com',
  projectId: 'cineflix-gpt-1e96d',
  storageBucket: 'cineflix-gpt-1e96d.firebasestorage.app',
  messagingSenderId: '87248498978',
  appId: '1:87248498978:web:5a86fe1ffce48dc6e2757b',
  measurementId: 'G-RYXWXC599R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
