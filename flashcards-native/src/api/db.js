// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGaUjFhI0p5QCzeugJBGQG4_IKl0W7fCQ",
  authDomain: "flashcardsnative-de6b8.firebaseapp.com",
  projectId: "flashcardsnative-de6b8",
  storageBucket: "flashcardsnative-de6b8.firebasestorage.app",
  messagingSenderId: "440721932897",
  appId: "1:440721932897:web:b4209e7ac582c7fe0de020",
  measurementId: "G-ZX2NZF2JEE"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig); // inicializa la app de firebase
export const analytics = getAnalytics(app); // inicializa el analytics de firebase
export const db = firebase.firestore(app); // inicializa la base de datos de firebase
export const auth = getAuth(app); // inicializa la autenticación de firebase
