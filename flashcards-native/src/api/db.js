// Importa solo lo necesario de la versión modular
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from 'firebase/firestore';

// Tus credenciales de firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTczHPjrfbx6PTzbTGKbG_Y_fL6E5Lt9c",
  authDomain: "flashcards-c5d50.firebaseapp.com",
  projectId: "flashcards-c5d50",
  storageBucket: "flashcards-c5d50.firebasestorage.app",
  messagingSenderId: "979071675404",
  appId: "1:979071675404:web:75a0c0fda4f72efc9bd229"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Accede a las colecciones usando el método modular
export const categoriesRef  = collection(db, 'categories');
export const cardsRef  = collection(db, 'cards');

export { db, auth };
