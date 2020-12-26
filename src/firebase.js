import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBT9dJUmqDM4U6mw2leuQ4SfkY3N4sAbTo",
  authDomain: "linkedin-clone-17047.firebaseapp.com",
  projectId: "linkedin-clone-17047",
  storageBucket: "linkedin-clone-17047.appspot.com",
  messagingSenderId: "1062646067357",
  appId: "1:1062646067357:web:5223dfff31d6ca7196e474",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
