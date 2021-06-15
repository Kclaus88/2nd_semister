import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyASAqP7-bPtluVHiD47U5yEfxp08bJ7OMg",
    authDomain: "leaply-69561.firebaseapp.com",
    projectId: "leaply-69561",
    storageBucket: "leaply-69561.appspot.com",
    messagingSenderId: "1037753639889",
    appId: "1:1037753639889:web:74deda498f5c1f5129b6f0"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export default firebase;