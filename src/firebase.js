import  firebase from "firebase";

const firebaseApp= firebase.initializeApp({

  apiKey: "AIzaSyCvFSAY2I9JWkdWyph4ZXQ1KtiNrzvXcgg",
  authDomain: "star-wars-db2f1.firebaseapp.com",
  projectId: "star-wars-db2f1",
  storageBucket: "star-wars-db2f1.appspot.com",
  messagingSenderId: "272649998251",
  appId: "1:272649998251:web:b0c7c53d6a5bf3e521ccee",
  measurementId: "G-2NFWD1ZHP2"

});

const db = firebaseApp.firestore()
const auth=firebase.auth()

export{auth};