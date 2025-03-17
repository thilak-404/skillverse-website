import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCpDolotxhZszuggXfnEm5K52XAQstr1NY",
  authDomain: "skillverse-ee9cb.firebaseapp.com",
  projectId: "skillverse-ee9cb",
  storageBucket: "skillverse-ee9cb.firebasestorage.app",
  messagingSenderId: "521977605807",
  appId: "1:521977605807:web:f5971d94bad9e6edce6e5a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { auth };
