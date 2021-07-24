import React from 'react';
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

init("user_yAoTfQpSbL0o6lmO5iyXj");


export default class ContactUsForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            message : "",
            name : "",
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
    };

    onNameChange(e){
        const val = e.target.value;
        this.setState(() => ({
            name : val
        }));
    };

    onEmailChange(e){
        const val = e.target.value;
        this.setState(() => ({
            email : val,
        }));
    };

    onMessageChange(e){
        const val = e.target.value;
        this.setState(() => ({
            message : val,
        }));
    };

    onSubjectChange(e){
        const val = e.target.value;
        this.setState(() => ({
            subject : val,
        }));
    };

    onSubmit(e){
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const subject = document.getElementById("subject").value;

        emailjs.send("service_ja6wkpc","template_t3t1zmz",{
            name,
            subject,
            message,
            reply_to : email
        }).then(() => {
            swal({
                title : "Submitted",
                text : "Your Complain is submitted Successfully",
                icon : "success"
            })
        }).catch(() => {
            swal({
                title : "Error",
                text : "There was some Error while Submitting your Complain",
                icon : "error"
            }).then((value) => {
                swal({
                    title : "Info",
                    text : "You can directly mail us on carrmerchants@gmail.com",
                    icon : "info",
                });
            })
        });

        this.setState(() => ({
            name : "",
            email : "",
            message : "",
            subject : "",
        }));
    }

    render(){
        return (
            <div>
                <form className = "ContactUsForm" onSubmit = {this.onSubmit}>
                    <input 
                        placeholder = "Name" 
                        type = "text"
                        value = {this.state.name} 
                        onChange = {this.onNameChange}
                        required = {true}
                        id = "name"
                    />
                    <input 
                        placeholder = "name@email.com" 
                        type = "email"
                        value = {this.state.email}
                        onChange = {this.onEmailChange}
                        required = {true}
                        id = "email"
                    />
                    <input 
                        type = "text"
                        placeholder = "Subject"
                        required = {true}
                        value = {this.state.subject}
                        onChange = {this.onSubjectChange}
                        id = "subject"
                    />
                    <textarea
                        placeholder = "Message" 
                        type = "text" 
                        value = {this.state.message}
                        onChange = {this.onMessageChange}
                        className = "ContactUsForm__message"
                        required = {true}
                        id = "message"
                    ></textarea>
                    <button type = "submit">Send</button>
                </form>
            </div>
        )
    }
};