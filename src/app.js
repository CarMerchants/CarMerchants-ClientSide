import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './router/AppRouter';
import './style/style.scss';

const jsx = (
    <div>
        <AppRouter />
    </div>
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