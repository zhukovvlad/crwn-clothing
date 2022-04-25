import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);





// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// 
// const config = {
//     apiKey: "AIzaSyDQmCJvZCeDos8Gv40QpvcRfAo-zcN6XMo",
//     authDomain: "crwn-db-523a2.firebaseapp.com",
//     projectId: "crwn-db-523a2",
//     storageBucket: "crwn-db-523a2.appspot.com",
//     messagingSenderId: "460648006713",
//     appId: "1:460648006713:web:488f3d27df6adbae2b39e8"
//   };
// 
// firebase.initializeApp(config);
// 
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// 
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ promt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
// 
// export default firebase;
