import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCrqX1K7CeJ9bVll3ZD1NmAKM3Wwjppg94",
  authDomain: "scuttlebutt-204a9.firebaseapp.com",
  databaseURL: "https://scuttlebutt-204a9-default-rtdb.firebaseio.com",
  projectId: "scuttlebutt-204a9",
  storageBucket: "scuttlebutt-204a9.appspot.com",
  messagingSenderId: "786388819420",
  appId: "1:786388819420:web:1c0e7b12f68436ccb00319",
};

export const app = initializeApp(firebaseConfig);
export const appAuth = getAuth(app);
export const db = getDatabase(app);
