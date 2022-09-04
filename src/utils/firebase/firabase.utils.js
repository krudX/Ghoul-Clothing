
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAyOloLC9-Kz9Bx_JZ8dJkSYuCRGwxNUaE",
  authDomain: "ghoul-clothing-db.firebaseapp.com",
  projectId: "ghoul-clothing-db",
  storageBucket: "ghoul-clothing-db.appspot.com",
  messagingSenderId: "618286650305",
  appId: "1:618286650305:web:1d8d4a73d7485e4d4cd540"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider)
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = await doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
}