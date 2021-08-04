import React from 'react';

export const LoginStatus = () => {
    let btn = document.querySelector("#drop_down");
    btn.addEventListener("click",() => {
        var display = document.querySelector(".DropDown").style.display 
        if(display == "flex"){
            document.querySelector(".DropDown").style.display = "none";
            btn.style.transform = "rotate(0deg)";
        }
        else{
            document.querySelector(".DropDown").style.display = "flex";
            btn.style.transform = "rotate(180deg)";
        }
    });
};