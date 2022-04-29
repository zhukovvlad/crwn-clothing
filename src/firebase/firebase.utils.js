import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyDQmCJvZCeDos8Gv40QpvcRfAo-zcN6XMo",
    authDomain: "crwn-db-523a2.firebaseapp.com",
    projectId: "crwn-db-523a2",
    storageBucket: "crwn-db-523a2.appspot.com",
    messagingSenderId: "460648006713",
    appId: "1:460648006713:web:488f3d27df6adbae2b39e8"
};

const app = initializeApp(config);

export const auth = getAuth(app);

const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, 'users', `${userAuth.uid}`);

    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
