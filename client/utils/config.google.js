// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIfhL2U8KrnpT0aXprGAY24kc5j3CQcEw',
  authDomain: 'sportsmatch-auth.firebaseapp.com',
  projectId: 'sportsmatch-auth',
  storageBucket: 'sportsmatch-auth.appspot.com',
  messagingSenderId: '981049209549',
  appId: '1:981049209549:web:bc67f4bc9f26de001eaf84'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
