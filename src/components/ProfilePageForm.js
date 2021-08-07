import React from 'react';
import user_img from '../../public/img/CompanyRelated/GuestLogin.png';
import UpdateProf from './sections/OptionModal';
import {firebase} from '../firebase/firebase';
import PhoneForm from './sections/PhoneForm';

export default class ProfilePageForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
            profile_pic : user_img,
            name : "Guest",
            email : "",
            ChgNum : this.props.ChgNum,
            phone : ""
        };

        //Bindings..
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCloseOpt = this.handleCloseOpt.bind(this);
    };

    onSubmit(e){
        e.preventDefault();
        this.setState(() => ({
            isOpen : true
        }))

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState(() => ({
                    profile_pic : user.photoURL,
                    name : user.displayName,
                    email : user.email,
                }))
                console.log(user.phoneNumber);
            }else{
                this.setState(() => ({
                    profile_pic : user_img,
                    name : "Guest",
                    email : "",
                    phone : ""
                }))
            }
        })

        
    }

    handleCloseOpt(e){
        this.setState(() => ({
            isOpen : false,
        }))
    };


    render(){
        return (
            <form onSubmit = {this.onSubmit} className ="ProfilePageForm">
                <button className = "DropDown__btn_div">{this.props.button_name}</button>
                <UpdateProf 
                    name = {this.state.name} 
                    profile_pic = {this.state.profile_pic} 
                    email = {this.state.email}
                    handleCloseOpt = {this.handleCloseOpt} 
                    isOpen ={this.state.isOpen}
                    required = {this.state.ChgNum}
                    phone = {this.state.phone}
                />
            </form>
        )
    }
}