import firebase from 'firebase'; 

const reactChatApp = firebase.initializeApp ({
    apiKey: "AIzaSyCoewNd3tGY_0hstalnlS0w-BP6bN2i7_k",
    authDomain: "react-chat-app-c3957.firebaseapp.com",
    projectId: "react-chat-app-c3957",
    storageBucket: "react-chat-app-c3957.appspot.com",
    messagingSenderId: "831151748347",
    appId: "1:831151748347:web:be9ee62fe9d1980487ac5e",
    measurementId: "G-8YDFRV3W49"
})

const dataBase = reactChatApp.firestore(); 
const auth = firebase.auth(); 

export {dataBase, auth}