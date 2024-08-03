import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCTq2Si9AGGWJJOiaCFG0M9cv_0OmheqfA",
  authDomain: "open-kommunity.firebaseapp.com",
  projectId: "open-kommunity",
  storageBucket: "open-kommunity.appspot.com",
  messagingSenderId: "280896604433",
  appId: "1:280896604433:web:5d6fe6607b308ea13464b0",
  measurementId: "G-H7SZPYE16P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

export { storage, db as firestore };