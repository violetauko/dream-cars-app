import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAIk9YiOCxW21EomeN31OletrIr-KTxnnM",
    authDomain: "dreamcars-6af48.firebaseapp.com",
    databaseURL: "https://dreamcars-6af48-default-rtdb.firebaseio.com",
    projectId: "dreamcars-6af48",
    storageBucket: "dreamcars-6af48.appspot.com",
    messagingSenderId: "188632747118",
    appId: "1:188632747118:web:33c20f4939438c6a802a7f",
    measurementId: "G-6E25MRFECT"
  };

  const app = getApps.length >0 ? getApp : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const  storage = getStorage(app);

  export { app, firestore, storage};