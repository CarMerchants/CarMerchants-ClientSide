import React from 'react';
import ContactUsPage from "../components/ContactUsPage";
import { firebase,googleAuthProvider } from "../firebase/firebase"
import user_img from '../../public/img/CompanyRelated/GuestLogin.png';

export const SetBtnInfo = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            document.getElementById("log__btn").style.display = "none";
            document.getElementById("loginout-btn").innerHTML = "Log Out";
            document.getElementById("user-img").src = firebase.auth().currentUser.photoURL;
            document.getElementById("name").innerHTML = firebase.auth().currentUser.displayName+"!";
        }else{
            document.getElementById("log__btn").innerHTML = "LogIn";
            document.getElementById("loginout-btn").innerHTML = "Log In";
            document.getElementById("user-img").src = user_img;
            document.getElementById("name").innerHTML = "guest!";
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
    const val = document.getElementById("log__btn").style.display;
    console.log(val);
    if(val != "none"){
        return firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
        });
    }else{
        document.getElementById("log__btn").style.display = "flex";
        return firebase.auth().signOut();
    }
};