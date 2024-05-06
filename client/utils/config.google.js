// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGOZZ3hE2CUelHveYmbzLo1NTetTL_-bs",
  authDomain: "sportspot-61551.firebaseapp.com",
  projectId: "sportspot-61551",
  storageBucket: "sportspot-61551.appspot.com",
  messagingSenderId: "942883653751",
  appId: "1:942883653751:web:048014ae85eb9410cc1e72",
  measurementId: "G-G6CXX1NG5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
