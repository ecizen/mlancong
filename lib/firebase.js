import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCG3cqL1P2RtHGdwsry6lxP1LA1unIvSAg",
  authDomain: "mlancong-cd4e3.firebaseapp.com",
  projectId: "mlancong-cd4e3",
  storageBucket: "mlancong-cd4e3.appspot.com",
  messagingSenderId: "145646621792",
  appId: "1:145646621792:web:62efe8898d9453a73d1f05",
  measurementId: "G-5GPXVX5VRG"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  const storage = getStorage();
  
  export { app, db, auth, storage }


