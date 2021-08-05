import React from 'react';
import ContactUsPage from "../components/ContactUsPage";
import { firebase,googleAuthProvider } from "../firebase/firebase"
import user_img from '../../public/img/CompanyRelated/GuestLogin.png';
import logout from '../../public/img/CompanyRelated/logout.png';


export const details = {
    profile_pic : user_img,
}

export  const SetBtnInfo = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            document.getElementById("loginout-btn-text").innerHTML = "Log Out";
            document.getElementById("user-img").src = firebase.auth().currentUser.photoURL;
            document.getElementById("name").innerHTML = firebase.auth().currentUser.displayName+"!";
            document.getElementById("loginout-btn-img").style.display = "flex";
            document.getElementById("loginout-btn-img").src = logout;
        }else{
            document.getElementById("loginout-btn-text").innerHTML = "Log In";
            document.getElementById("user-img").src = user_img;
            document.getElementById("name").innerHTML = "guest!";
            document.getElementById("loginout-btn-img").style.display = "none";
        }
    });
};

export const  profilePage = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            document.getElementById("user-img").src = firebase.auth().currentUser.photoURL;
        }else{
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
    const val = document.getElementById("loginout-btn-text").innerHTML;
    if(val != "Log Out"){
        return firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
        });
    }else{
        return firebase.auth().signOut();
    }
};