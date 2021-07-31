import React from 'react';
import FeedBackForm from './FeedBackForm';

const openFeedBackForm = () => {
    var display = document.getElementById("FeedBack").style.display;
    if(display == "flex"){
        document.getElementById("FeedBack").style.display = "none";
        document.getElementById("FeedBack__btn").innerHTML = "Feedback";
    } 
    else{
        document.getElementById("FeedBack").style.display = "flex";
        document.getElementById("FeedBack__btn").innerHTML = "Close";
    }
}

const FeedBack = () => (
    <div className = "FeedBack">
        <button id = "FeedBack__btn" onClick = {openFeedBackForm} className = "FeedBack__btn">
            Feedback
        </button>
        <FeedBackForm />
    </div>
);

export default FeedBack;