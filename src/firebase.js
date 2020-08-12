import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1MChuJNkeZSDwjORxAm6QDvtcVkDF2Nk",
    authDomain: "slack-clone-reactjs.firebaseapp.com",
    databaseURL: "https://slack-clone-reactjs.firebaseio.com",
    projectId: "slack-clone-reactjs",
    storageBucket: "slack-clone-reactjs.appspot.com",
    messagingSenderId: "496038198377",
    appId: "1:496038198377:web:047cd7b7fcbac0c3a836f8",
    measurementId: "G-1L8NJZRM43"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;