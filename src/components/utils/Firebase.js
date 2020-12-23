import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCur_H28aI03iKHLi_LUTxMQDBmQ_CrC-s",
  authDomain: "devdo-5e0a9.firebaseapp.com",
  projectId: "devdo-5e0a9",
  storageBucket: "devdo-5e0a9.appspot.com",
  messagingSenderId: "168859080393",
  appId: "1:168859080393:web:1710c8347ef0e63b71df18"
});

export const auth = app.auth();
export const useFireStore = firebase.firestore();

export default app;
