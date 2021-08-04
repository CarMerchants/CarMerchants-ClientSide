import React from 'react';
import ContactUsPage from "../components/ContactUsPage";
import { firebase,googleAuthProvider } from "../firebase/firebase"
import user_img from '../../public/img/CompanyRelated/GuestLogin.png';

export const SetBtnInfo = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            document.getElementById("log__btn").innerHTML = "Logout";
            document.getElementById("user-img").src = firebase.auth().currentUser.photoURL;
        }else{
            document.getElementById("log__btn").innerHTML = "Login";
            document.getElementById("user-img").src = user_img;
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