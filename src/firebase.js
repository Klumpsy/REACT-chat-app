import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 

export const auth = firebase.initializeApp({ 
    apiKey: "AIzaSyCoewNd3tGY_0hstalnlS0w-BP6bN2i7_k",
    authDomain: "react-chat-app-c3957.firebaseapp.com",
    databaseURL: "https://react-chat-app-c3957-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-chat-app-c3957",
    storageBucket: "react-chat-app-c3957.appspot.com",
    messagingSenderId: "831151748347",
    appId: "1:831151748347:web:be9ee62fe9d1980487ac5e",
    measurementId: "G-8YDFRV3W49"  
}).auth(); 

