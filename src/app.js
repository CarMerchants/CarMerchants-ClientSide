import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import './style/style.scss';
import scrollTop from './functions/scrollTop';
import {firebase} from './firebase/firebase';
import { SetBtnInfo } from './action/auth';
import { LoginStatus } from './functions/login-status';

const jsx = (
    <HashRouter>
        <AppRouter />
    </HashRouter>
);

ReactDOM.render(jsx,document.getElementById("app"));

const NavBar = document.querySelector(".HamBurgers");
if(NavBar)
{NavBar.addEventListener("click", () => {
    document.querySelector(".NavBar").style.display = "flex";
});}

const CloseNav = document.querySelector(".Close");
if(CloseNav){
    CloseNav.addEventListener("click", () => {
        document.querySelector(".NavBar").style.display = "none";
    })
}

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log("The user is logged in");
    }else{
        console.log("The user is logged out!!");
    }
})


//Functions...
scrollTop();
SetBtnInfo();
LoginStatus();