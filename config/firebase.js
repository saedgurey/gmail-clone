import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: "clone-66730.firebaseapp.com",
    projectId: "clone-66730",
    storageBucket: "clone-66730.appspot.com",
    messagingSenderId: "979564944313",
    appId: import.meta.env.VITE_APP_ID
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };