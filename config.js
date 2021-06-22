import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCs4zqd2H9QeS3815GYUIv5b8uoa691zHE",
    authDomain: "bartersystem-33fd4.firebaseapp.com",
    projectId: "bartersystem-33fd4",
    storageBucket: "bartersystem-33fd4.appspot.com",
    messagingSenderId: "374648337155",
    appId: "1:374648337155:web:79322e3ce9d848b1d4ef36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
