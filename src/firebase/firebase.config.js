import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpsOPAoI63NFX9Wnf2L_niVAm5eRPi4fk",
  authDomain: "dragon-news-auth-270d7.firebaseapp.com",
  projectId: "dragon-news-auth-270d7",
  storageBucket: "dragon-news-auth-270d7.firebasestorage.app",
  messagingSenderId: "707319764205",
  appId: "1:707319764205:web:89d43a01f17b74e2a128e4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
