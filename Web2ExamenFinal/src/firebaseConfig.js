import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyACJoNB-yVpkR49lfl272B0tj-1UxO4De8",
  authDomain: "web2final-1e8eb.firebaseapp.com",
  projectId: "web2final-1e8eb",
  storageBucket: "web2final-1e8eb.appspot.com",
  messagingSenderId: "341239149264",
  appId: "1:341239149264:web:a75adca02bfc127c5e64d5"
};
      // Initialize Firebase
      const fb = firebase.initializeApp(firebaseConfig);
      // export const fire = firebase 
      export const auth =  fb.auth();
      export const db =  fb.firestore();
