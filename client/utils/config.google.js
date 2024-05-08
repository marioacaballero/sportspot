// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkc0gjmFbYfNWA6yBqsVhbz75TtV-5iMI",
  authDomain: "sportspot-2.firebaseapp.com",
  projectId: "sportspot-2",
  storageBucket: "sportspot-2.appspot.com",
  messagingSenderId: "1099443948358",
  appId: "1:1099443948358:web:ea0518dfa62ac8807af347",
  measurementId: "G-9V5Y1942L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
