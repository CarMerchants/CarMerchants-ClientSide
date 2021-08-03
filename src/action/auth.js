import React from 'react';
import ContactUsPage from "../components/ContactUsPage";
import { firebase,googleAuthProvider } from "../firebase/firebase"


export const SetBtnInfo = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            document.getElementById("log__btn").innerHTML = "Logout";
            document.getElementById("login-user").innerHTML = firebase.auth().currentUser.displayName;
        }else{
            document.getElementById("log__btn").innerHTML = "Login";
            document.getElementById("login-user").innerHTML = "Welcome, Guest"; 
        }
    })
};

export const userDetails = () => {
    return firebase.auth().onAuthStateChanged((user) => {
        if(user){
            return <h2>Hello</h2>
        }
        else{
            return <h2>Welcome</h2>
        }
    })
};

export const processLoginLogout = () => {
    const val = document.getElementById("log__btn").innerHTML;
    console.log(val);
    if(val == "Login"){
        return firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
        });
    }else{
        return firebase.auth().signOut();
    }
};