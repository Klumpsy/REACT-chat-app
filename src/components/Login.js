import React from 'react'; 
import "firebase/compat/app";
import firebase from 'firebase/compat/app';

//Firebase Auth
import { auth } from "../firebase";

//Icons 
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Login() {
    return (
        <div id="login-page">
            <div id="login-card">
                <h1>Welcome!</h1>
                <h2>To KlumpsyChat</h2>
                <button 
                className = "login-button"
                onClick = {() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >             
                    Sign In With Google 
                    <FcGoogle 
                    className = "login-icon"
                    size ={22}
                    />
                </button>
                <button 
                className = "login-button"
                onClick = {() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    Sign In With Facebook 
                    <FaFacebook 
                    className = "login-icon login-icon-facebook"
                    size ={22}
                    />
                </button>
            </div>
        </div>
    )
}

export default Login;
