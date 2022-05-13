import firebase from "firebase/compat/app"
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8vQSHnndXVZZRTReUGDfQSUp1WcwpWgI",
    authDomain: "react-proyect-3eaf7.firebaseapp.com",
    projectId: "react-proyect-3eaf7",
    storageBucket: "react-proyect-3eaf7.appspot.com",
    messagingSenderId: "480649517523",
    appId: "1:480649517523:web:26775cc8808d66cacb3726",
    measurementId: "G-LFWL95MSYK"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth()

  export{auth}