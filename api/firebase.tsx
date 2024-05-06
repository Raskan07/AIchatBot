import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDuBBIUQ-VEtbdsfZ7CzmA8hLx3EGO-tG8",
  authDomain: "ai-bot-app.firebaseapp.com",
  projectId: "ai-bot-app",
  storageBucket: "ai-bot-app.appspot.com",
  messagingSenderId: "554231566201",
  appId: "1:554231566201:web:2249a2a8e523e9ca2869a8",
  measurementId: "G-7Q6ZL9P9DY"
};

const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)