import React from 'react';
import FeedBackForm from './FeedBackForm';

const openFeedBackForm = () => {
    var display = document.getElementById("FeedBack").style.display;
    if(display == "flex"){
        document.getElementById("FeedBack").style.display = "none";
        document.getElementById("FeedBack__btn").innerHTML = "FEEDBACK";
    } 
    else{
        document.getElementById("FeedBack").style.display = "flex";
        document.getElementById("FeedBack__btn").innerHTML = "CANCEL";
    }
}

const FeedBack = () => (
    <div className = "FeedBack">
        <button id = "FeedBack__btn" onClick = {openFeedBackForm} className = "FeedBack__btn">
            FEEDBACK
        </button>
        <FeedBackForm />
    </div>
);

export default FeedBack;