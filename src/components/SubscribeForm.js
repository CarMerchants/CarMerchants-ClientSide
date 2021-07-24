import React from 'react';
import database from '../firebase/firebase';
import emailjs from 'emailjs-com';
import { store } from 'react-notifications-component';
import "animate.css";
import snacks from '../../public/img/logos/Snacks-removebg.png';
import { init } from 'emailjs-com';
import 'react-notifications-component/dist/theme.css';
import { relativeTimeThreshold } from 'moment';
import swal from 'sweetalert';
import validator from 'validator';

init("user_yAoTfQpSbL0o6lmO5iyXj");

export default class SubscribeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            subscribed : false,
            message : "",
            color : "",
        };
        this.emailChange = this.emailChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    emailChange(e){
        const val = e.target.value;
        this.setState(() => ({
            email : val
        }));
    };

    onSubmit(e){
        e.preventDefault();
        if(!validator.isEmail(this.state.email)){
            swal({
                title : "Error",
                text : "You have entered a wrong email address",
                icon : "error"
            });
            this.setState(() => ({
                email : "",
            }))
            return ;
        }
        database.ref("EMAILS").push({
            email : this.state.email,
        }).then(() => {
            this.setState(() => ({
                email : '',
                subscribed : true,
                message : "You are Subscribed! Best decision you've ever made!",
                color : "rgb(0,200,5)",
            }));
            swal({
                title : "Subscribed",
                text : "You are successfully Subscribed for the newsletter !!",
                icon : "success"
            });
        })
    }

    render(){
        return (
            <div>
                <img src = {snacks}/>
                <div className = "Subscribed">
                    {this.state.subscribed && <p style = {{color : this.state.color}}>You are Subscribed! Best decision you've ever made!</p>}
                </div>
                { this.state.subscribed == false &&
                <div className = "SubsCriberForm">
                        <h4>
                            The 3-minute newsletter with fresh takes on the Car news you need
                            to make a better choice.
                        </h4>
                        <form onSubmit = {this.onSubmit}>
                            <input 
                                type="Email" 
                                placeholder = "name@email.com" 
                                value = {this.state.email}
                                onChange = {this.emailChange}
                            />
                            <button>Subscribe</button>
                        </form>
                    </div>
                }
            </div>
        );
    };
};