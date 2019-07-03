import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyA9h8Ujc65cpS3od3sR2-nDl28JxO2pBuE",
  authDomain: "r-jerome.firebaseapp.com",
  databaseURL: "https://r-jerome.firebaseio.com",
  projectId: "r-jerome",
  storageBucket: "r-jerome.appspot.com",
  messagingSenderId: "624472786415",
  appId: "1:624472786415:web:6c25cf92f32764d8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();