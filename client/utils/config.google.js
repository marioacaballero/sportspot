// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpY_8__Dt6uFwUG5QZNKPiDhcWUc6bRsQ',
  authDomain: 'aythen-spot.firebaseapp.com',
  projectId: 'aythen-spot',
  storageBucket: 'aythen-spot.appspot.com',
  messagingSenderId: '195030108911',
  appId: '1:195030108911:web:a27c228fd9d92412d2291a'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
