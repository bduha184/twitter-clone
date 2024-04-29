import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDqlS8dHwda3kURr_zZS0oMOqMGRKCX5V8",
  authDomain: "twitter-clone-56c29.firebaseapp.com",
  projectId: "twitter-clone-56c29",
  storageBucket: "twitter-clone-56c29.appspot.com",
  messagingSenderId: "914279675926",
  appId: "1:914279675926:web:1d7c59c89afad88e251d37"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
