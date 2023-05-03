import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJSVnqRF1BZE-AiebaUhYnhs1WCksx65o",
  authDomain: "admin-panel-f3b93.firebaseapp.com",
  projectId: "admin-panel-f3b93",
  storageBucket: "admin-panel-f3b93.appspot.com",
  messagingSenderId: "269471820347",
  appId: "1:269471820347:web:925e25ff9906ddda3cca1e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);