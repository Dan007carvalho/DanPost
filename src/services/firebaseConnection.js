import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




let firebaseConfig = {
    apiKey: "AIzaSyAfRShvwuHoDk4VD8SRki7ElrXuFXGZT2c",
    authDomain: "vueapp-76640.firebaseapp.com",
    projectId: "vueapp-76640",
    storageBucket: "vueapp-76640.appspot.com",
    messagingSenderId: "384949703933",
    appId: "1:384949703933:web:2e281b48841dc173d75a94",
    measurementId: "G-W78M3FZ6GS"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  