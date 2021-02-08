import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDy1Ob90921DDhw9Yj-PiWkhBbNaOaJnmg",
    authDomain: "minipass-dbca5.firebaseapp.com",
    projectId: "minipass-dbca5",
    storageBucket: "minipass-dbca5.appspot.com",
    messagingSenderId: "624297743716",
    appId: "1:624297743716:web:dde8f0dfc34bd518405671"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;