import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';






const firebaseConfig = {
    apiKey: "AIzaSyACbcvlrsOTS90oVDbyQZjPnOwbv5ykCd8",
    authDomain: "react-twitter-clone-d6f66.firebaseapp.com",
    projectId: "react-twitter-clone-d6f66",
    databaseURL:"htpps://react-twitter-clone-d6f66.firebaseio.com",
    storageBucket: "react-twitter-clone-d6f66.firebasestorage.app",
    messagingSenderId: "766750012770",
    appId: "1:766750012770:web:b596a67747123e77f5683b",
    measurementId: "G-FDB64QF4RE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;
  