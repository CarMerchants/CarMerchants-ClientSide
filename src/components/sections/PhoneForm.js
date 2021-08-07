import React from 'react';
import OtpInput from 'react-otp-input';


export default class PhoneForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phone : "",
            otp : "",
        }

        //Binding 
        this.onPhoneNumChange = this.onPhoneNumChange.bind(this);
        this.onOtpChange = this.onOtpChange.bind(this);
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
                    <button className = "DropDown__btn_div">Get OTP</button>
                </div><br/>
                <div id = "phoneInput-1">
                    <OtpInput 
                        value = {this.state.otp}
                        numInputs = {6}
                        separator = {<span> &nbsp;-&nbsp; </span>}
                        onChange = {this.onOtpChange}
                        inputStyle = "otp-container"
                    />
                    <button className = "DropDown__btn_div">Verify</button>
                </div>
            </form>
        )
    }
};