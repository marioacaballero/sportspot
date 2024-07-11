// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCAhf3kX6-nhrDmwvYDPujWmquxJJquNqU',
  authDomain: 'spotsport-auth.firebaseapp.com',
  projectId: 'spotsport-auth',
  storageBucket: 'spotsport-auth.appspot.com',
  messagingSenderId: '336387199674',
  appId: '1:336387199674:web:eccaf95a784d0e43ea6883'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage()

// ANDROID: 170387470104-gjbs1uunr7r3fodkv3gk4lncajgv8abc.apps.googleusercontent.com
// IOS: 170387470104-s69t91p5e392jtmkigkpv98unin22641.apps.googleusercontent.com
