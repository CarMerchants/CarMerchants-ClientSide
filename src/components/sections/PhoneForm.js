import React from 'react';
import OtpInput from 'react-otp-input';
import swal from 'sweetalert';

export default class PhoneForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phone : "",
            otp : "",
            isClicked : false,
        }

        //Binding 
        this.onPhoneNumChange = this.onPhoneNumChange.bind(this);
        this.onOtpChange = this.onOtpChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onPhoneNumChange(e){
        const val = e.target.value;
        if(val.length>10){
            return;
        }
        this.setState(() => ({
            phone : val,
        }));
    };

    onOtpChange(otp){
        this.setState(() => ({
            otp
        }))
    }

    onSubmit(e){
        const val = e.target.value;
        if(this.state.phone.length != 10 ){
            swal({
                title : "Error",
                text : "You have entered wrong phone number",
                icon : "error"
            })

            return;
        }

        if(val == "verify"){
            if(!this.state.isClicked)
            {
                swal({
                title : "info",
                text : "Click get otp first",
                icon : "info"
                })
                return;
            }

            if(!this.state.otp){
                swal({
                    title : "Error",
                    text : "Please write the OTP",
                    icon : "error",
                })
                return;
            }

            return;
        }

        this.setState(() => ({
            isClicked : true,
        }))
        console.log(val);
        
    }

    render(){
        return (
            <form className = "PhoneForm">
                <div id = "phoneInput">
                    <input 
                        type = "text"
                        placeholder = "Phone Number"
                        value = {this.state.phone}
                        onChange = {this.onPhoneNumChange}
                        autoFocus = {true}
                    />
                    <button id = "get_otp" onClick = {this.onSubmit} value = "get_otp" className = "DropDown__btn_div">Get OTP</button>
                </div><br/>
                <div id = "phoneInput-1">
                    <OtpInput 
                        value = {this.state.otp}
                        numInputs = {6}
                        separator = {<span> &nbsp;-&nbsp; </span>}
                        onChange = {this.onOtpChange}
                        inputStyle = "otp-container"
                        isInputNum = {true}
                    />
                    <button  onClick = {this.onSubmit} value = "verify" id = "verify" className = "DropDown__btn_div">Verify</button>
                </div>
            </form>
        )
    }
};