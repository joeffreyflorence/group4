// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage, ref, uploadString } from 'firebase/storage'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUdF76MhLgjc7HI48jnhlvIjT3KYz6r5Q",
  authDomain: "react-native-login-be81b.firebaseapp.com",
  databaseURL: "https://react-native-login-be81b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-native-login-be81b",
  storageBucket: "react-native-login-be81b.appspot.com",
  messagingSenderId: "22875957074",
  appId: "1:22875957074:web:c59424d233e08557ddbc8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app)
const firestore = getFirestore(app)

export { auth, storage, firestore, app }

