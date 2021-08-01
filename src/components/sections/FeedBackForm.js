import React from 'react';
import { processLoginLogout } from '../../action/auth';
import database, { googleAuthProvider } from '../../firebase/firebase';
import {firebase} from '../../firebase/firebase';

export default class FeedBackForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feedback : "",
        };

        this.onFeedBack = this.onFeedBack.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onFeedBack(e){
        const val = e.target.value;

        this.setState(() => ({
            feedback : val ,
        }));
    };
    
    onSubmit(e){
        e.preventDefault();
        const val = document.getElementById("log__btn").innerHTML;
        if(val == "Logout"){
            const user = firebase.auth().currentUser;
            database.ref(`users/${user.uid}/feedback`).push({
                feedback : this.state.feedback,
                name : user.displayName,
                profile_pic : user.photoURL
            }).then(() => {
                this.setState(() => ({feedback : ""}));
                console.log("Your feedback is submitted successfully");
            })
        }
        else{
            firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
                const user = firebase.auth().currentUser;
                database.ref(`users/${user.uid}/feedback`).push({
                    feedback : this.state.feedback,   
                    name : user.displayName,
                    profile_pic : user.photoURL
                }).then(() => {
                    this.setState(() => ({feedback : ""}));
                    console.log("Your feedback is submitted successfully");
                })
            })
        }
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.onSubmit} className = "FeedBackForm" id = "FeedBack">
                    <textarea
                        value = {this.state.feedback}
                        onChange = {this.onFeedBack}
                        placeholder = "Write your feedback here"
                        rows = "5"
                        cols = "20"
                        required = {true}
                    >
                    </textarea><br/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        );
    };
};